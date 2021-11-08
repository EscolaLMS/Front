function* chunksArray<Type>(arr: Type[], chunkSize: number) {
  for (let i = 0; i < arr.length; i += chunkSize) {
    yield arr.slice(i, i + chunkSize);
  }
}

export const chunks = <Type>(arr: Type[], chunkSize: number): Type[][] => {
  return Array.from(chunksArray([...arr], chunkSize));
};
