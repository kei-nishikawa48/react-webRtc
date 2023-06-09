import { doc, onSnapshot } from "firebase/firestore";
import FirebaseSignallingClient from "../repository/FirebaseSignallingClinet";
import { fireStore } from "../config/firebase";
type SessionDescriptionData = {
	sender: string;
	type: "offer" | "answer";
	sessionDescription: RTCSessionDescription;
};
type CandidateData = {
	sender: string;
	type: "candidate";
	candidate: RTCIceCandidateInit;
};

export default class RTCClient {
	rtcPeerConnection: RTCPeerConnection;
	mediaStream: MediaStream | null;
	localPeerName: string;
	remotePeerName: string;
	firebaseSignallingClient: FirebaseSignallingClient;
	private _setRtcClient: (rtcClient: RTCClient) => void;
	constructor(
		public remoteVideoRef: React.RefObject<HTMLVideoElement>,
		setRtcClient: (rtcClient: RTCClient) => void,
	) {
		const config = {
			iceServers: [{ urls: "stun:stun.stunprotocol.org" }],
		};
		this.rtcPeerConnection = new RTCPeerConnection(config);
		this.localPeerName = "";
		this.remotePeerName = "";
		this._setRtcClient = setRtcClient;
		this.mediaStream = null;
		this.firebaseSignallingClient = new FirebaseSignallingClient();
	}

	setRtcClient() {
		this._setRtcClient(this);
	}

	async getUserMedia() {
		try {
			const constraints = { audio: true, video: true };
			this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
		} catch (error) {
			console.error(error);
		}
	}

	async setMediaStream() {
		await this.getUserMedia();
		this.addTracks();
		this.setRtcClient();
	}

	addTracks() {
		this.addAudioTrack();
		this.addVideoTrack();
	}
	addAudioTrack() {
		if (this.audioTrack && this.mediaStream) {
			this.rtcPeerConnection.addTrack(this.audioTrack, this.mediaStream);
		}
	}
	addVideoTrack() {
		if (this.videoTrack && this.mediaStream) {
			this.rtcPeerConnection.addTrack(this.videoTrack, this.mediaStream);
		}
	}
	setOntrack() {
		this.rtcPeerConnection.ontrack = (rtcTrackEvent) => {
			if (rtcTrackEvent) {
				if (this.remoteVideoRef.current === null) return;
				if (rtcTrackEvent.track.kind !== "video") return;
				const remoteMediaStream = rtcTrackEvent.streams[0];
				this.remoteVideoRef.current.srcObject = remoteMediaStream;
				this.setRtcClient();
			}
		};
		this.setRtcClient();
	}
	async offer() {
		const sessionDescription = await this.createOffer();
		await this.setLocalDescription(sessionDescription);
		await this.sendOffer();
	}
	private async createOffer() {
		try {
			return await this.rtcPeerConnection.createOffer();
		} catch (er) {
			console.error(er);
		}
	}
	private async setLocalDescription(
		sessionDescription: RTCSessionDescriptionInit | undefined,
	) {
		try {
			await this.rtcPeerConnection.setLocalDescription(sessionDescription);
		} catch (er) {
			console.error(er);
		}
	}
	async sendOffer() {
		this.firebaseSignallingClient.setPeerNames(
			this.localPeerName,
			this.remotePeerName,
		);
		await this.firebaseSignallingClient.sendOffer(this.localDescription);
	}
	async connect(remotePeerName: string) {
		this.remotePeerName = remotePeerName;
		this.setOnicecandidateCallback();
		this.setOntrack();
		await this.offer();
		this.setRtcClient();
	}
	setOnicecandidateCallback() {
		this.rtcPeerConnection.onicecandidate = async ({ candidate }) => {
			//stan serverから自分のipアドレスの情報を教えてくれる
			if (candidate) {
				console.log({ candidate });
				//todo:リモートに通信経路(candidate)を通知する
				await this.firebaseSignallingClient.sendCandidate(candidate.toJSON());
			}
		};
	}

	async answer(sender: string, sessionDescription: RTCSessionDescription) {
		try {
			this.remotePeerName = sender;
			this.setOnicecandidateCallback();
			this.setOntrack();
			await this.setRemoteDescription(sessionDescription);
			const answer = await this.rtcPeerConnection.createAnswer();
			await this.rtcPeerConnection.setLocalDescription(answer);
			await this.sendAnswer();
			this.setRtcClient();
		} catch (er) {
			console.error(er);
		}
	}
	async sendAnswer() {
		this.firebaseSignallingClient.setPeerNames(
			this.localPeerName,
			this.remotePeerName,
		);
		await this.firebaseSignallingClient.sendAnswer(this.localDescription);
	}
	async setRemoteDescription(remoteDescription: RTCSessionDescription) {
		await this.rtcPeerConnection.setRemoteDescription(remoteDescription);
	}
	async saveReceivedSessionDescription(
		sessionDescription: RTCSessionDescription,
	) {
		try {
			await this.setRemoteDescription(sessionDescription);
		} catch (er) {
			console.error(er);
		}
	}
	async startListening(localPeerName: string) {
		this.localPeerName = localPeerName;
		this.setRtcClient();
		await this.firebaseSignallingClient.remove(`member/${localPeerName}`);
		onSnapshot(doc(fireStore, `member/${this.localPeerName}`), async (doc) => {
			const data = doc.data() as SessionDescriptionData | CandidateData;

			if (!doc.exists()) {
				return;
			}
			console.log(data);
			const { type, sender } = data;

			if (type === "offer") {
				const { sessionDescription } = data;
				await this.answer(sender, sessionDescription);
			} else if (type === "answer") {
				const { sessionDescription } = data;
				await this.saveReceivedSessionDescription(sessionDescription);
			} else if (type === "candidate") {
				const { candidate } = data;
				await this.addIceCandidate(candidate);
			}
			this.setRtcClient();
		});
	}
	async addIceCandidate(candidate: RTCIceCandidateInit) {
		try {
			const iceCandidate = new RTCIceCandidate(candidate);
			await this.rtcPeerConnection.addIceCandidate(iceCandidate);
		} catch (er) {
			console.error(er);
		}
	}
	get audioTrack() {
		return this.mediaStream?.getAudioTracks()[0];
	}
	get videoTrack() {
		return this.mediaStream?.getVideoTracks()[0];
	}
	get localDescription() {
		return this.rtcPeerConnection.localDescription?.toJSON();
	}
}
