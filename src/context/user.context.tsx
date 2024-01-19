import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { UserType } from "../api/user.service";

interface UserContextProvider {
  children: ReactNode;
}

type UserContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: UserContextProvider) => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    email: "",
    name: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("usercontext is undefined");
  }

  const { user, setUser } = userContext;
  const isLoggedIn = user.id === 0 ? false : true;

  return { user, setUser, isLoggedIn };
};
