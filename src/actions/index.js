export const SAVE_EMAIL = 'SAVE_EMAIL';

const saveEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: userEmail,
});
export default saveEmail;
