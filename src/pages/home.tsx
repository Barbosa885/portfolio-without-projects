import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <Navbar>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Gustavo Barbosa
        </h2>
        <h3 className="text-2xl py-2">Desenvolvedor e designer.</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Freelancer provendo serviços de desenvolvimento web e design. Junte-se
          a mim e vamos pra cima.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub className="text-xl cursor-pointer" />
          <AiFillLinkedin className="text-xl cursor-pointer" />
        </div>
        <div className=""></div>
      </div>
    </Navbar>
  );
}
