import { useEffect, useReducer, useRef, useState } from "react";
import RTCClient from "../utils/RTCClient";

const useRTCClient = () => {
	const [rtcClient, _setRtcClient] = useState<RTCClient | null>(null);
	const [, forceRender] = useReducer((bool) => !bool, false);
	const remoteVideoRef = useRef<HTMLVideoElement>(null);
	const setRtcClient = (rtcClient: RTCClient | null) => {
		_setRtcClient(rtcClient);
		forceRender();
	};
	useEffect(() => {
		const init = async () => {
			const client = new RTCClient(remoteVideoRef, setRtcClient);
			await client.setMediaStream();
		};
		init();
	}, []);
	return rtcClient;
};

export default useRTCClient;
