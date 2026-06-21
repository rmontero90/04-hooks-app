import { useCallback, useState } from "react";
import { MySubTitle } from "./ui/MySubTitle";
import { MyTitle } from "./ui/MyTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  const handleMyApiCall = useCallback(() => {
    console.log("Llamar a mi API", subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle callMyApi={handleMyApiCall} subtitle={subTitle} />
      <h6>Mi subtitulo</h6>
      <button
        onClick={() => {
          setTitle("Hello");
        }}
        className="bg-blue-500 text-white px-4 py-4 rounded-md cursor-pointer"
      >
        Cambiar titulo
      </button>
      <button
        onClick={() => {
          setSubTitle("World");
        }}
        className="bg-blue-500 text-white px-4 py-4 rounded-md cursor-pointer"
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};
