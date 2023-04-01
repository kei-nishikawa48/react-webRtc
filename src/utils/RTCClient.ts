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
}
