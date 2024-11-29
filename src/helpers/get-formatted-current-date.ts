const getFormattedCurrentDate = (): string => {
  const date = new Date();

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};

export { getFormattedCurrentDate };
