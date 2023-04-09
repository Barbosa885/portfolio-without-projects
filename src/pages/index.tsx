import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-500 h-screen w-full justify-center items-center">
      <span className="text-white text-lg text-bold">teste</span>
    </div>
  );
}
