export const asyncMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (!action.paylaod || !action.paylaod.then) {
      console.log("Not yet resolved : ", action);
      return next(action);
    }

    console.log("Resolved : ", action);
    action.paylaod.then((res) => {
      const newAction = dispatch({ ...action, paylaod: res });
      return next(newAction);
    });
  };
