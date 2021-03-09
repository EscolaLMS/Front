export const mailValidator = (mail: string): boolean =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mail);

export const arrayEquals = (a: number[], b: number[]): boolean =>
  JSON.stringify(a.sort()) === JSON.stringify(b.sort());

export const groupBy = <T>(array: T[], key: string): T => {
  // eslint-disable-next-line
  return array.reduce((result: any, currentValue: any) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

export const getFormatedTime = (time: number): string => {
  return `${time / 60 >= 1 ? `${(time / 60).toFixed(0)}h` : ""} ${
    time % 60 > 0 ? `${time % 60}m` : "0m"
  }`;
};

export const getSlug = (name: string): string => {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "-")
    .replace(/[\s\W-]+/g, "-");
};
