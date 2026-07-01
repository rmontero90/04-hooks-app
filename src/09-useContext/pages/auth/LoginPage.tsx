import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginPage = () => {
  const [userId, setUserId] = useState("");

  const navigation = useNavigate();

  const { login } = use(UserContext);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+userId);

    if (!result) {
      toast.error("Usuario no encontrado");
      return;
    }
    navigation("/about");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          type="number"
          placeholder="User's ID"
          value={userId}
          onChange={(event) => setUserId(event?.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost">Back to the main page</Button>
      </Link>
    </div>
  );
};
