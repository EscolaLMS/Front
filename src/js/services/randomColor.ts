export const getRandomColor = (): string => {
  const colors = [
    "#F8C621",
    "#70A6F0",
    "#F28541",
    "#9583E0",
    "#4FE080",
    "#54BDCB",
    "#F0A150",
    "#458D5D",
    "#A387D1",
    "#D0D056",
    "#8A9AB1",
    "#74D7F4",
    "#ea7500",
    "#d05c91",
    "#21a2f4",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
