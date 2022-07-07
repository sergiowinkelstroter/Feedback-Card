import { Link } from "react-router-dom";
import IlustrationIcon from "./IlustrationIcon";

export function ThakYouCard(props) {
  return (
    <main className="bg-gray-800 flex flex-col w-[325px] m-auto mt-8 rounded-2xl pt-8 pb-8 items-center">
      <IlustrationIcon />

      <h1 className="font-semibold text-2xl text-white mt-6">Thank you!</h1>
      <p className="text-gray-400 text-center mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam
        harum accusantium doloribus! Numquam iure corporis, recusandae suscipit
        tempora.
      </p>
      <Link
        to="/"
        className="mt-6 bg-orange-600 rounded-2xl  w-2/3 flex justify-center items-center text-white h-9 hover:bg-white hover:text-orange-600 transition-colors"
      >
        Voltar
      </Link>
    </main>
  );
}
