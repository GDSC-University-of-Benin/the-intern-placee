import { setCurrentUserOnAuthStateChange } from "@/lib/api/auth";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export function useUser() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		setCurrentUserOnAuthStateChange((userState) => {
			if (userState) {
				setUser(userState);
			} else {
				console.log("User does not exists");
			}
		});
	}, []);

	return { user };
}
