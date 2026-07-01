import { createContext, useState } from "react";
import { users, type User } from "../data/user-mock.data";
// import { toast } from "sonner";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);

const getInitialUser = (): { user: User | null; authStatus: AuthStatus } => {
  const storedUserId = localStorage.getItem("userId");
  if (!storedUserId) return { user: null, authStatus: "not-authenticated" };

  const user = users.find((u) => u.id === +storedUserId) ?? null;
  return {
    user,
    authStatus: user ? "authenticated" : "not-authenticated",
  };
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(
    () => getInitialUser().authStatus,
  );
  const [user, setUser] = useState<User | null>(() => getInitialUser().user);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      setUser(null);
      setAuthStatus(`not-authenticated`);
      return false;
    }
    setUser(user);
    setAuthStatus(`authenticated`);
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAuthStatus(`not-authenticated`);
    localStorage.removeItem("userId");
    setUser(null);
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === "authenticated",
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
