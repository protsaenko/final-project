export const todayDate = () => {
  return new Date().toJSON().slice(0, 10).replace(/-/g, "/");
};
