import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "../config/firebase";

export default class FirebaseSignallingClient {
	localPeerName: string;
	remotePeerName: string;
	constructor() {
		this.localPeerName = "";
		this.remotePeerName = "";
	}

	setPeerNames(localPeerName: string, remotePeerName: string) {
		this.localPeerName = localPeerName;
		this.remotePeerName = remotePeerName;
	}
	async sendOffer(sessionDescription: RTCSessionDescription) {
		await setDoc(this.targetRef, {
			type: "offer",
			sender: this.localPeerName,
			sessionDescription,
		});
	}

	async sendAnswer(sessionDescription: RTCSessionDescription) {
		await setDoc(this.targetRef, {
			type: "answer",
			sender: this.localPeerName,
			sessionDescription,
		});
	}
	get targetRef() {
		return doc(fireStore, `member/${this.remotePeerName}`);
	}
}
