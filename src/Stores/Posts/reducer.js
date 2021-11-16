const initialState = {
  isLoading: null,
  blog: [],
  error: {}
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FAQ_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: {}
      };
    case 'CREATE_FAQ_SUCCESS':
      console.log(action.payload);
      const { blog } = action.payload;
      return {
        ...state,
        isLoading: false,
        blog: {
          ...state.blog,
          blog: [blog, ...state.blog]
        },
        error: {}
      };
    default:
      return state;
  }
};
