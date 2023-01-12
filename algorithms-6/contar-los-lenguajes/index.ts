import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
/*   
  // ForEach apprach
  const langs = {};
  developers.forEach((lang) => {
    if (langs[lang.language]) {
      langs[lang.language] += 1;
    } else {
      langs[lang.language] = 1;
    }
  }); 
  
  return langs;

  */

  // Reduce approach
  return developers.reduce((previous, current) => {
    if (!previous[current.language]) {
      previous[current.language] = 0;
    }

    previous[current.language] += 1;

    return previous;
  }, {});
}
