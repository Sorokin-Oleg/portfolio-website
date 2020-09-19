const modalReduser = (state = { modalActiveIndex: 0, modalActive: false }, action) => {
  switch (action.type) {
    case "MODAL_ACTIVE":
      return (state = action.data);

    default:
      return state;
  }
};

export default modalReduser;
