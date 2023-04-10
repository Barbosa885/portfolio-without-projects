import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ children }: any) {
  return (
    <div className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="flex py-10 mb-12 justify-between">
          <h1 className="text-xl font-burtons">barbosa</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl">
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                className="font-poppins bg-gradient-to-r from-purple-700 to-purple-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Currículo
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </section>
    </div>
  );
}
