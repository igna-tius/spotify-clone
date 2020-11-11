export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //  "BQDOnGtaYNo_pWpZ4tFCUnYo7T4n91SeKhsHtF6YSCWDYEQBtFl_77jeno5fXTWyAqVTBMMYw9i5ilW8ZaIsa81DkVMnCQs57FbZ8dErikPnhYotRFB1--IoWcCV22cDY8qqV9Pwak19JxELEQwVFOwUBApLDgM58pvOHUhTbJIxPc3a",
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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
