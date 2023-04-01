export default class RTCClient {
	rtcPeerConnection: RTCPeerConnection;
	private _localPeerName: string;
	private _remotePeerName: string;
	setRtcClient: () => void;
	constructor(_setRtcClient: (rtcClient: RTCClient) => void) {
		const config = {
			iceServers: [{ urls: "stun:stun.stunprotocol.org" }],
		};
		this.rtcPeerConnection = new RTCPeerConnection(config);
		this._localPeerName = "";
		this._remotePeerName = "";
		this.setRtcClient = () => {
			_setRtcClient(this);
		};
	}
	set localPeerName(name: string) {
		this._localPeerName = name;
		this.setRtcClient();
	}
	get localPeerName() {
		return this._localPeerName;
	}

	set remotePeerName(name: string) {
		this._remotePeerName = name;
		this.setRtcClient();
	}
	get remotePeerName() {
		return this._remotePeerName;
	}
}
