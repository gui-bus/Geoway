"use client";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import Button from "../common/Button";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const GetApp = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refDownload, inViewDownload] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section
        ref={ref}
        className="flexCenter w-full flex-col pb-28 xl:pb-52 mt-10 xl:mt-28 relative"
      >
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          animate={inViewDownload ? "show" : "hidden"}
          exit="hidden"
          className="w-full"
        >
          <div ref={refDownload} className="get-app">
            <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
              <h2 className="bold-40 l:bold-64 xl:max-w-[320px]">
                Baixe de graça agora mesmo!
              </h2>
              <p className="regular-16 text-gray-10">
                Disponível para dispositivos iOS e Android
              </p>
              <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                <Button
                  type="button"
                  title="App Store"
                  icon_start={<IoLogoApple size={28} />}
                  variant="btn_white"
                  full
                />
                <Button
                  type="button"
                  title="Play Store"
                  icon_start={<IoLogoGooglePlaystore size={28} />}
                  variant="btn_dark_green_outline"
                  full
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end visible xl:invisible">
              <Image src="/phones.png" alt="Phones" width={550} height={870} />
            </div>
          </div>
        </motion.div>
        <div className="xl:flex flex-1 items-center justify-end absolute right-10 z-50 hidden">
          <Image src="/phones.png" alt="Phones" width={550} height={870} />
        </div>
      </section>
    </motion.div>
  );
};

export default GetApp;
