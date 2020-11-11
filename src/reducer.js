export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDzrw-mmLRlBSu90BCvAFxhllaJJ-2Y8ERwYN0jG8yL8s5ajz…bRAmr4f4yIgdPCozqyTPMepW85OQ8V_2RL850jhZESVv9OQR9",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
