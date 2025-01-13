import { getJob } from "@/lib/api/db";
import { isErrorInstance } from "@/lib/utils";
import { ApiStatus, Id, JobData } from "@/types";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";

export default function useJobdetails(jobId: string | undefined) {
	const [status, setStatus] = useState<ApiStatus>("idle");
	const [job, setJob] = useState<Id<JobData> | null>(null);
	const [error, setError] = useState<FirebaseError | null>(null);

	useEffect(() => {
		const fetchJob = async () => {
			if (!jobId) return;

			try {
				setStatus("loading");

				const fetchedJob = await getJob(jobId);

				setJob(fetchedJob);
				setStatus("success");
			} catch (e) {
				if (isErrorInstance(e)) {
					setStatus("error");
					console.log(e)
					setError(e);
				}
			}
		};

		fetchJob();
	}, [jobId]);

	return { data: job, error, status };
}
