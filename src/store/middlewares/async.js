export const asyncMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then((res) => {
      const newAction = dispatch({ ...action, payload: res });
      return next(newAction);
    });
  };
