import {
  ImageBestGearDesktop,
  ImageBestGearMobile,
  ImageBestGearTablet,
} from "@/assets/media/images/shared";

export function BestAudio() {
  return (
    <>
      <figure className="flex-1 overflow-hidden rounded-lg">
        <picture>
          <source media="(min-width: 64em)" srcSet={ImageBestGearDesktop} />
          <source media="(min-width: 40em)" srcSet={ImageBestGearTablet} />
          <source srcSet={ImageBestGearMobile} />
          <img
            src={ImageBestGearMobile}
            width={700}
            height={475}
            className="size-full object-cover"
            alt="A man listening to music with a headphone"
            loading="lazy"
          />
        </picture>
      </figure>

      <div className="flex flex-1 flex-col items-center gap-10 text-center lg:items-start lg:text-left">
        <h2 id="best-audio" className="max-w-[20ch] text-4xl font-bold uppercase lg:max-w-[15ch]">
          Bringing you the <em className="text-brand-500"> best </em>
          audio gear
        </h2>

        <p className="text-black/50">
          Located at the heart of New York City, Audiophilos is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophilos the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </>
  );
}
