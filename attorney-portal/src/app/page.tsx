import ReactCarousel from "@/components/ReactCarousel";

export default function Home() {
  const images = [
    { src: "/abogada-9.jpg", legend: "Legend 6" },
    { src: "/abogada-8.jpg", legend: "Legend 7" },
    { src: "/abogada-7.jpg", legend: "Legend 8" },
    { src: "/abogada-10.jpg", legend: "Legend 5" },
  ];

  return (
    <>
      <main className="">
        <section className="mt-24 p-4">
          <ReactCarousel images={images} />
        </section>
        <section className="mt-24 font-mono">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-12 my-8">
            <div className="bg-gray-900 rounded-lg shadow-md p-8 flex flex-col items-center w-64">
              <span className="text-5xl font-extrabold text-amber-500 mb-2">
                +50
              </span>
              <span className="text-lg font-semibold ">Abogados Idóneos</span>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-md p-8 flex flex-col items-center w-64">
              <span className="text-5xl font-extrabold text-green-600 mb-2">
                +350
              </span>
              <span className="text-lg font-semibold ">Casos exitosos</span>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-md p-8 flex flex-col items-center w-64">
              <span className="text-5xl font-extrabold text-blue-600 mb-2">
                +200
              </span>
              <span className="text-lg font-semibold ">Clientes felices</span>
            </div>
          </div>
        </section>
        <section className="mt-24 p-4 font-mono">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Bienvenido a Velarde & Asociados
          </h1>
          <p className="text-center mx-auto max-w-2xl">
            Nuestro equipo de abogados altamente capacitados está listo para
            defender tus derechos y ofrecerte las mejores estrategias legales en
            cualquier ámbito.
          </p>
          <p className="text-lg mt-8 justify-self-center">
            <ul className=" text-left mx-auto max-w-2xl">
              <li>🔹 Asesoría gratuita inicial</li>
              <li>🔹 Representación legal efectiva</li>
              <li>🔹 Enfoque centrado en el cliente</li>
            </ul>
          </p>
          <p className="text-lg mt-8 text-center">
            Confía en profesionales que combinan experiencia, ética y
            resultados.
          </p>
          <p className="text-lg font-bold mt-4 text-center">
            <span>¡Contáctanos hoy mismo!</span>
          </p>
        </section>
      </main>
    </>
  );
}
