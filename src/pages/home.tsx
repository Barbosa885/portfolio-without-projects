import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RxDividerHorizontal } from "react-icons/rx";
import Image from "next/image";

import deved from "../../public/images/dev-ed-wave.png";

import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <Navbar>
      <div className="text-center p-10">
        <h2 className="font-poppins text-5xl py-2 text-purple-600 font-medium">
          Gustavo Barbosa
        </h2>
        <div className="flex justify-center">
          <hr className="w-1/2" />
        </div>
        <h3 className="font-poppins text-2xl py-2">
          Desenvolvedor e designer.
        </h3>
        <p className="font-poppins text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
          Freelancer provendo serviços de desenvolvimento web e design. Junte-se
          a mim e vamos tirar sua ideia do papel!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <Link href="https://github.com/Barbosa885">
            <AiFillGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/barbosa885/">
            <AiFillLinkedin />
          </Link>
          <Link href="https://www.instagram.com/gustavob.alm_/">
            <AiFillInstagram />
          </Link>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-purple-600 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image
            src={deved}
            alt={"3d model character waving"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Navbar>
  );
}
