import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
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
                className="font-poppins bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Gustavo Barbosa
          </h2>
          <h3 className="text-2xl py-2">Desenvolvedor e designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Freelancer provendo serviços de desenvolvimento web e design.
            Junte-se a mim e vamos pra cima.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub className="text-xl cursor-pointer" />
            <AiFillLinkedin className="text-xl cursor-pointer" />
          </div>
          <div className=""></div>
        </div>
      </section>
    </div>
  );
}
