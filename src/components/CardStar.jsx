import { Link } from "react-router-dom";
import IconStar from "./IconStar";
import { StarNumber } from "./StarNumber";

export function CardStar() {
  return (
    <>
      <main className="bg-gray-800 flex flex-col w-[325px] m-auto mt-8 rounded-2xl p-8">
        <div className="bg-gray-600 p-2 rounded-full w-[32px] h-[32px] flex items-center">
          <IconStar />
        </div>
        <h1 className="font-semibold text-2xl text-white mt-6">
          How did we do?
        </h1>
        <p className="text-gray-400 mt-3 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          rem impedit ex iusto sit ullam enim magni praesentium nostrum nobis
          molestias eos.
        </p>
        <div className="flex justify-between">
          <StarNumber value={1} />
          <StarNumber value={2} />
          <StarNumber value={3} />
          <StarNumber value={4} />
          <StarNumber value={5} />
        </div>
        <Link
          to="/thankYou"
          className="bg-orange-600 rounded-2xl  flex justify-center items-center text-white h-9 mt-6 hover:bg-white hover:text-orange-600 transition-colors"
        >
          SUBMIT
        </Link>
      </main>
    </>
  );
}
