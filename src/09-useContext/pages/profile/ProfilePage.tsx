import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { use } from "react";

export const ProfilePage = () => {
  const { user, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />
      <p>{user?.name}</p>
      <p>{user?.title}</p>
      <p>{user?.about}</p>
      <p>{user?.skills}</p>
      <pre className="my-4">{JSON.stringify({}, null, 2)}</pre>
      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>
    </div>
  );
};
