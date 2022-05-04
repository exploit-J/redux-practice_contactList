let initState = {
  contactList: [],
};

function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      };
    default:
      return { ...state };
  }

  //  action이 반복되어 코드리팩토링

  //   switch (action.type) {
  //     case "ADD_CONTACT":
  //       return {
  //         ...state,
  //         contactList: [
  //           ...state.contactList,
  //           { name: action.payload.name, phoneNum: action.payload.phoneNum },
  //         ],
  //       };
}

export default reducer;
