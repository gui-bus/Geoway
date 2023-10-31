"use client";
import React from "react";
import Image from "next/image";
import { HiMap } from "react-icons/hi2";
import { PEOPLE_URL } from "@/constants";

interface CampSiteProps {
    bgImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
  }
  
  const CampSite = ({
    bgImage,
    title,
    subtitle,
    peopleJoined,
  }: CampSiteProps) => {
    return (
      <div
        className={`swiper-slide h-full w-full min-w-[90vw] ${bgImage} bg-cover bg-no-repeat rounded-xl`}
      >
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter bg-gray-1 rounded-full pr-10">
            <div className="rounded-full bg-gray-1 p-3">
              <HiMap size={48} className="text-white rounded-full bg-green-50 p-2" />
            </div>
  
            <div className="flex flex-col text-center">
              <h4 className="bold-16 md:bold-18 text-white whitespace-nowrap">{title}</h4>
              <p className="regular-14 text-white">{subtitle}</p>
            </div>
          </div>
  
          <div className="flexCenter gap-6">
            <span className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <Image
                  src={url}
                  key={url}
                  alt="Users"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-10 w-10 rounded-full inline-block"
                />
              ))}
            </span>
            <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
          </div>
        </div>
      </div>
    );
  };

  
export default CampSite;