import { IMAGE_MAP } from "./imageMap";

export const AUDIO_DATA = [
  {
    id: 101,
    title: "Audio File One",
    audioURL: require("../../assets/audio/101.mp3"),
    img9x16URL: require("../../assets/images/audioFileImages/101-9x16.webp"),
    // img1x1URL: require("../../assets/images/audioFileImages/101-1x1.webp"),
    img1x1URL: IMAGE_MAP[101],
    tags: ["dreamy", "relaxing", "manifestation"],
  },
  {
    id: 102,
    title: "Audio File Two",
    audioURL: require("../../assets/audio/102.mp3"),
    img9x16URL: require("../../assets/images/audioFileImages/101-9x16.webp"),
    // img1x1URL: require("../../assets/images/audioFileImages/101-1x1.webp"),
    img1x1URL: IMAGE_MAP[102],
    tags: ["motivation", "caffeine"],
  },
  {
    id: 103,
    title: "Audio File Three",
    audioURL: require("../../assets/audio/102.mp3"),
    img9x16URL: require("../../assets/images/audioFileImages/101-9x16.webp"),
    // img1x1URL: require("../../assets/images/audioFileImages/101-1x1.webp"),
    img1x1URL: IMAGE_MAP[103],
    tags: ["psychadelic", "relaxing"],
  },
];
