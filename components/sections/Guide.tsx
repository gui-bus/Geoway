import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col mt-10">
      <div className=" padding-container container w-full pb-24">
        <p className="uppercase regular-18 mb-3 text-green-50">
          Nós estamos aqui por você
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Navegação Descomplicada
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Com o Geoway, você estará sempre no caminho certo, graças ao nosso
            suporte para mapas offline quando você estiver desconectado da
            internet. Convide amigos, familiares e colegas para desfrutar da
            natureza, explorando vales pitorescos e atingindo o pico das
            montanhas.
          </p>
        </div>
      </div>

      <div className="flexCenter md:container relative w-full">
        <Image
          src="/img-5.png"
          alt="Guide"
          width={1280}
          height={720}
          className="w-full lg:w-[80rem] h-[25rem] object-cover object-center md:rounded-2xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-lg md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="Meter"
            width={16}
            height={100}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destino</p>
                <p className="bold-16 text-green-50">52 min</p>
              </div>
              <p className="bold-20">Trilha Inca</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Ponto inicial</p>
              <h4 className="bold-20 whitespace-nowrap">Puerta del Sol</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
