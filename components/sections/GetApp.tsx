import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import Button from "../common/Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-28 mt-10">
      <div className="get-app">
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

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="Phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
