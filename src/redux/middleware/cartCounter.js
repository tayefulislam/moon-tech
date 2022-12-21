const cartCounter = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);

  return next(action);
};

export default cartCounter;
