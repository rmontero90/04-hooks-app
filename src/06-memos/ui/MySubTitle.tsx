import { memo } from "react";

interface Props {
  subtitle: string;
  callMyApi: () => void;
}

export const MySubTitle = memo(({ subtitle, callMyApi }: Props) => {
  console.log("MySubTitle re-render");
  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>
      <button
        onClick={callMyApi}
        className="bg-indigo-500 text-white px-2 py-1 rounded-md"
      >
        Llamar a función
      </button>
    </>
  );
});
