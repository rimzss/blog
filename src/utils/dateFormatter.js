import moment from "moment";

export const dateFormatter = (date) => {
  const formatedDate = moment(date).format("ll");
  return formatedDate;
};
