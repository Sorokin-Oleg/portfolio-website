const initialState = {
    modalActiveIndex: 0,
    modalActive: false
}

const modalReduser = (state = [], action) => {
    switch(action.type) {
        case "MODAL_ACTIVE":
        return state = action.data;
        default:
        return initialState;
    };
};

export default modalReduser;