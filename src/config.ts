const checkEnv = (env: string) => {
	if (!import.meta.env[env]) {
		throw new Error(`Environment variable ${env} is not set. Please set it.`);
	}
	
	return import.meta.env[env];
};

const apiKey = checkEnv("VITE_FIREBASE_API_KEY");
const authDomain = checkEnv("VITE_FIREBASE_AUTH_DOMAIN");
const projectId = checkEnv("VITE_FIREBASE_PROJECT_ID");
const storageBucket = checkEnv("VITE_FIREBASE_STORAGE_BUCKET");
const messagingSenderId = checkEnv("VITE_FIREBASE_MESSAGING_ID");
const appId = checkEnv("VITE_FIREBASE_APP_ID");
const measurementId = checkEnv("VITE_FIREBASE_MEASUREMENT_ID");

const storageBucketUrl = checkEnv("VITE_FIREBASE_STORAGE_BUCKET_URL")

const config = {
	API_KEY: apiKey,
	AUTH_DOMAIN: authDomain,
	PROJECT_ID: projectId,
	STORAGE_BUCKET: storageBucket,
	MESSAGING_SENDER_ID: messagingSenderId,
	APP_ID: appId,
	MEASUREMENT_ID: measurementId,
	STORAGE_BUCKET_URL: storageBucketUrl
};

export default config;
