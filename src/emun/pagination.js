export const PaginationBy = 26;
export const PaginationTotalPage = totCount => {
  return Math.ceil(totCount / PaginationBy);
};
