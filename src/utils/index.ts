export const getEventType = (event: string) =>
  event.split("\\").pop() as String;

export const getTopicType = (type: string) => type.split("\\")?.pop();

export const getPriceWithTax = (price: number, taxPercentage: number) => {
  const totalTax = ((price / 100) * taxPercentage).toFixed(2);
  const totalPrice = Number(price) + Number(totalTax);
  return totalPrice.toFixed(2);
};
