export function getCurrentUser(key) {
  return {
    type: 'checkGoogleAuthenticatedUser',
    payload: {
      request: {
        method: 'get',
        url: `/api/user`,
      },
    },
  };
}
