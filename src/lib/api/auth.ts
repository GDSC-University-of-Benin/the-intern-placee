import { app } from "@/lib/api/config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	User,
} from "firebase/auth";

const auth = getAuth(app);

export async function setCurrentUserOnAuthStateChange(
	userCallback: (user: User | null) => void
) {
	onAuthStateChanged(auth, (userState) => userCallback(userState));
}

export async function signUpWithEmailAndPassword(
	email: string,
	password: string
) {
	return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInWithEmailAndPassword(
	email: string,
	password: string
) {
	return await firebaseSignInWithEmailAndPassword(auth, email, password);
}

export const signOut = () => auth.signOut();
