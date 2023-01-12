export default function buscarAislado(numeros: number[]): number {
  const oddNumbers = numeros.filter((n) => n % 2 !== 0);
  const evenNumbers = numeros.filter((n) => n % 2 === 0);

  if (oddNumbers.length > evenNumbers.length) {
    return evenNumbers[0];
  }

  return oddNumbers[0];
}
