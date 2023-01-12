import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  const filteredDevs = developers.filter((dev) => {
    const isValid = Object.values(dev).every(Boolean);
    return !isValid ? dev : null;
  });

  return filteredDevs.map((dev) => {
    const missingProp = Object.keys(dev).find((k) => dev[k] === null);
    return {
      ...dev,
      question: `Hi, could you please provide your ${missingProp}.`,
    };
  });
}
