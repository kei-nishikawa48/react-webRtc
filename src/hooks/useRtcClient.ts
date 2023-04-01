import { useEffect, useReducer, useState } from "react";
import RTCClient from "../utils/RTCClient";

const useRTCClient = () => {
	const [rtcClient, _setRtcClient] = useState<RTCClient | null>(null);
	const [, forceRender] = useReducer((bool) => !bool, false);
	const setRtcClient = (rtcClient: RTCClient | null) => {
		_setRtcClient(rtcClient);
		forceRender();
	};
	useEffect(() => {
		const init = async () => {
			const client = new RTCClient(setRtcClient);
			await client.getUserMedia();
			client.setRtcClient();
		};
		init();
	}, []);
	return rtcClient;
};

export default useRTCClient;
