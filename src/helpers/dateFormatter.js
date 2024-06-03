import moment from "moment";

export const formatDate = (dateStr) => {
  const formattedDate = moment(dateStr).format("MMMM DD, YYYY");
  return formattedDate;
};
