"use client";
import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import { HiPlay, HiX } from "react-icons/hi";
import Button from "../common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const Hero = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <section className="container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-64 xl:whitespace-nowrap tracking-tighter">
            Mapeando Aventuras
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[32.5rem]">
            Queremos estar presentes em cada uma de suas jornadas, buscando a
            satisfação e contemplando a beleza incorruptível da natureza.
            Podemos ajudá-lo em uma aventura ao redor do mundo com apenas um
            aplicativo.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <HiStar key={index} size={24} className="text-yellow-400" />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-gray-1">
              +100k
              <span className="regular-16 lg:regular-20 ml-2">
                Avaliações excelentes
              </span>
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_dark" />

            <Button
              type="button"
              title="Como funciona?"
              variant="btn_white_text"
              icon_start={<HiPlay size={32} className="text-green-600" />}
            />
          </div>
        </div>

        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 flex w-[16.75rem] flex-col gap-8 rounded-3xl bg-gray-1 px-7 py-8 mt-5">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Localização</p>
                <HiX size={20} className="text-white" />
              </div>
              <p className="bold-20 text-white">Trilha Inca</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distância</p>
                <p className="bold-20 text-white">52.44 Km</p>
              </div>

              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevação</p>
                <p className="bold-20 text-white">2.043 Km</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
