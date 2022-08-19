import moment from 'moment';
import {PostType} from '../types/firebase';

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

export const extractUsernameFromEmail = (email: string) => {
  return email?.split('@')[0];
};

export const createEmptyTextPost = () => {
  return {
    id: '',
    ownerId: '',
    ownerName: '',
    type: PostType.TEXT_POST as PostType.TEXT_POST,
    text: '',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    likes: {},
  };
};
