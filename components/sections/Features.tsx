import { FEATURES } from "@/constants";
import Image from "next/image";
import { HiCalendarDays } from "react-icons/hi2";
import { HiLocationMarker, HiVolumeUp } from "react-icons/hi";
import { LuWifiOff } from 'react-icons/lu'

const Features = () => {
  return (
    <section className="container flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="maxContainer relative flex w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="Phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <h2 className="bold-32 lg:bold-64">Funcionalidades</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  LuWifiOff: <LuWifiOff size={28} />,
  HiCalendarDays: <HiCalendarDays size={28} />,
  HiVolumeUp: <HiVolumeUp size={28} />,
  HiLocationMarker: <HiLocationMarker size={28} />,
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  const iconComponent = iconMap[icon] || null;

  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 text-white">
        {iconComponent}
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
