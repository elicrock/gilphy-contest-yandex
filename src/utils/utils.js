export const getPageCount = (totalCount, limit = 9) => {
  return Math.ceil(totalCount / limit);
};
