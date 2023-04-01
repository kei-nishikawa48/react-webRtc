export default class RTCClient {
	rtcPeerConnection: RTCPeerConnection;
	localPeerName: string;
	remotePeerName: string;
	constructor() {
		const config = {
			iceServers: [{ urls: "stun:stun.stunprotocol.org" }],
		};
		this.rtcPeerConnection = new RTCPeerConnection(config);
		this.localPeerName = "";
		this.remotePeerName = "";
	}
}
