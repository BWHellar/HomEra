import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { config} from "./config";

const app = initializeApp(config);

export const messaging = getMessaging(app);
export const auth = getAuth(app);



export default app;
