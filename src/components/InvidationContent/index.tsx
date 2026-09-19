import Image from "next/image";
import { AnimatedOrangeBorder } from "../AnimatedOrangeBorder";
import style from "./content-animation.module.css";
import mirrorballStyles from "./mirrorballs.module.css";
import { MobileScrollButton } from "./MobileScrollButton";

export function InvidationContent() {
  return (
    <div className="relative mx-auto max-w-none aspect-[1000/1150] w-full lg:max-w-[640px]">
      <div className={mirrorballStyles.mirrorballs} aria-hidden="true">
        <Image
          src="/images/mirrorball.svg"
          alt=""
          width={716}
          height={731}
          className={`${mirrorballStyles.mirrorball} ${mirrorballStyles.large}`}
        />
        <Image
          src="/images/mirrorball.svg"
          alt=""
          width={716}
          height={731}
          className={`${mirrorballStyles.mirrorball} ${mirrorballStyles.medium}`}
        />
        <Image
          src="/images/mirrorball.svg"
          alt=""
          width={716}
          height={731}
          className={`${mirrorballStyles.mirrorball} ${mirrorballStyles.small}`}
        />
        <Image
          src="/images/mirrorball.svg"
          alt=""
          width={716}
          height={731}
          className={`${mirrorballStyles.mirrorball} ${mirrorballStyles.bottomRight}`}
        />
        <Image
          src="/images/white-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.whiteStarLeft}`}
        />
        <Image
          src="/images/white-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.whiteStarTop}`}
        />
        <Image
          src="/images/white-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.whiteStarBottom}`}
        />
      </div>

      <div className="absolute inset-0 z-10">
        <AnimatedOrangeBorder />
      </div>

      <div className={mirrorballStyles.pinkStars} aria-hidden="true">
        
        <Image
          src="/images/pink-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.pinkStarLeftTop}`}
        />
        <Image
          src="/images/pink-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.pinkStarLeft}`}
        />
        <Image
          src="/images/pink-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.pinkStarRight}`}
        />
        <Image
          src="/images/pink-star.svg"
          alt=""
          width={100}
          height={100}
          className={`${mirrorballStyles.star} ${mirrorballStyles.pinkStarBottom}`}
        />
      </div>

      <div
        className={`${style.content} absolute inset-0 z-20 flex flex-col items-center justify-center text-pink-800 font-baloo gap-2.5 md:gap-5`}
      >
        <div className="relative flex flex-col items-center justify-center leading-none">
          <span className="font-brittany text-[2rem] md:text-[5rem] relative z-10">
            Jú faz
          </span>
          <span className="text-orange font-caudex text-[8rem] md:text-[18rem] indent-0 -mt-3! md:-mt-2! tracking-[-.097em] pr-5!">
            20
          </span>
        </div>

        <span className="uppercase font-farmhouse font-bold text-xl md:text-4xl">
          set | 26 | 16h
        </span>

        <span className="text-[14px] md:text-[16px] font-cocomat">
          Traga sua bebida!
        </span>

        <div className="flex flex-col items-center justify-center text-[15px] md:text-[18px] font-cocomat">
          <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
            <span className="font-bold leading-4 text-center">
              Confirme sua presença <br />
              abaixo
            </span>

            <MobileScrollButton />
          </div>

          <span className="hidden lg:block font-bold">
            Confirme sua presença ao lado
          </span>
        </div>
      </div>
    </div>
  );
}
