import { signInWithPopup } from "firebase/auth";

export const authWithGoogle = async (auth : any, provider ?: any) => {
  const res = await signInWithPopup(auth, provider);
  const user = res.user;
  return user;
};
