export const friendifyFirebaseMessage = (message: string) => {
  //Remove text between brackets []
  return message.replace(/\[[^()]*\]/g, '').trim();
};
