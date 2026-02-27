const images = import.meta.glob("/app/assets/media/images/**/*.{jpg,png,svg}", {
  eager: true,
  import: "default",
});

export const resolveImage = (path: string) => {
  const key = `/app/assets/media/images/${path}`;
  return (images[key] as string) ?? key;
};

export const withBase = <T extends { mobile: string; tablet: string; desktop: string }>(
  img: T,
) => ({
  ...img,
  mobile: resolveImage(img.mobile),
  tablet: resolveImage(img.tablet),
  desktop: resolveImage(img.desktop),
});
