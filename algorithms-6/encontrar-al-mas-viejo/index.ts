import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  const ages = developers.map((dev) => dev.age);
  const older = Math.max(...ages);
  return developers.filter((dev) => dev.age === older);
}
