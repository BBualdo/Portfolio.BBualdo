import moment from "moment";

const getCodingTime = () => {
  const startDate = moment("2023-06-28");
  const today = moment();
  const duration = moment.duration(today.diff(startDate));
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();

  return [years, months, days];
};

export default getCodingTime;
