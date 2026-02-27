import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconTwitter,
} from "@/assets/media/icons";
import { resolveImage } from "@/lib/media";

export const routes = [
  {
    url: "/",
    text: "home",
    Icon: resolveImage("shared/desktop/image-category-thumbnail-headphones.png"),
  },
  {
    text: "headphones",
    url: "/headphones",
    Icon: resolveImage("shared/desktop/image-category-thumbnail-headphones.png"),
  },
  {
    text: "speakers",
    url: "/speakers",
    Icon: resolveImage("shared/desktop/image-category-thumbnail-speakers.png"),
  },
  {
    text: "earphones",
    url: "/earphones",
    Icon: resolveImage("shared/desktop/image-category-thumbnail-earphones.png"),
  },
];

export const social = [
  {
    text: "github",
    url: "https://github.com/princemuel",
    Icon: IconGithub,
  },
  {
    text: "facebook",
    url: "https://www.facebook.com/mikeychuks",
    Icon: IconFacebook,
  },
  {
    text: "twitter",
    url: "https://www.x.com/iamprincemuel",
    Icon: IconTwitter,
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/princemuel",
    Icon: IconLinkedIn,
  },
  {
    text: "instagram",

    url: "https://www.instagram.com/iamprincemuel",
    Icon: IconInstagram,
  },
];
