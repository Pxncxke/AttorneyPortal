import Image from "next/image";
import Link from "next/link";
import SVG from "../../public/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-blue-950 text-white p-4 flex  items-center md:justify-center justify-around md:gap-10 font-mono shadow-2xl">
        <div className="md:max-w-36 max-w-20 text-overflow text-xs p-1">
          Llámanos: <br /> (+507) 236-5555
        </div>
        <div className="flex-col items-center justify-center  mb-3">
          <Image
            src={SVG}
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full justify-self-center"
          />
          <div className="p-1 font-bold">Velarde & Asociados</div>
        </div>
        <div className="md:max-w-32 max-w-20 text-overflow text-xs p-1">
          Edificio Plaza 2000, Oficina 1001
        </div>
      </div>
      <div className="font-mono items-center justify-center -mt-4 hidden md:flex">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center p-4 bg-gray-800 text-white max-w-3/4 min-w-1/2 rounded-lg">
          <nav className="space-x-5">
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              Nosotros
            </Link>
            <Link href="/attorneys" className="hover:text-gray-400">
              Abogados
            </Link>
            <Link href={"/areas-of-practice"} className="hover:text-gray-400">
              Areas
            </Link>
            <Link href={"/cases"} className="hover:text-gray-400">
              Casos
            </Link>
            <Link href={"/contact"} className="hover:text-gray-400">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
      <div className="md:hidden end-0 flex justify-end -mt-5">
        <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-2 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
