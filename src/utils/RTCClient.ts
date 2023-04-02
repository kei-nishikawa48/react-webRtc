import { collection, onSnapshot } from "firebase/firestore";
import { fireStore } from "../config/firebase";

export default class RTCClient {
	rtcPeerConnection: RTCPeerConnection;
	mediaStream: MediaStream | null;
	localPeerName: string;
	remotePeerName: string;
	private _setRtcClient: (rtcClient: RTCClient) => void;
	constructor(setRtcClient: (rtcClient: RTCClient) => void) {
		const config = {
			iceServers: [{ urls: "stun:stun.stunprotocol.org" }],
		};
		this.rtcPeerConnection = new RTCPeerConnection(config);
		this.localPeerName = "";
		this.remotePeerName = "";
		this._setRtcClient = setRtcClient;
		this.mediaStream = null;
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

	get audioTrack() {
		return this.mediaStream?.getAudioTracks()[0];
	}
	get videoTrack() {
		return this.mediaStream?.getVideoTracks()[0];
	}
	startListening(localPeerName: string) {
		this.localPeerName = localPeerName;
		const ref = collection(fireStore, localPeerName);
		onSnapshot(ref, (snapshot) => {
			const data = snapshot.docs.map((doc) => {
				return doc.data();
			});
		});
	}
}
