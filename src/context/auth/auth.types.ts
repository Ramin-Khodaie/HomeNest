import { Dispatch, SetStateAction } from "react";

export type AuthContext = {
  user: {
    token: string;
  } | null;
    setUser: Dispatch<SetStateAction<{token: string} | null>>;
};
