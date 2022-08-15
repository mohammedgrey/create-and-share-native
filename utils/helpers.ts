import moment from 'moment';

export const friendifyFirebaseMessage = (message: string) => {
  //Remove text between brackets []
  return message.replace(/\[[^()]*\]/g, '').trim();
};

export const formatDate = (date: moment.MomentInput, format?: string) => {
  return moment(date).format(format ?? 'D MMM, YYYY');
};

export const formatTime = (date: moment.MomentInput, format?: string) => {
  return moment(date).format(format ?? 'hh:mm A');
};

export const formatDateWithTime = (
  date: moment.MomentInput,
  format?: string,
) => {
  return moment(date).format(format ?? 'D MMM, YYYY, hh:mm A');
};
