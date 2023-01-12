import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  const ages = developers.map((dev) => dev.age);
  const agesSum = ages.reduce((acc, cv) => acc + cv, 0);
  return Math.round(agesSum / ages.length);
}
