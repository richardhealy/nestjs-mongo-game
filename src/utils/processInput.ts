export const processInput = (input: string) =>
  input.toLocaleLowerCase().split('+').join(' ');
