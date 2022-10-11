const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLogin: true,
  user: null,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUserInfor } = userSlice.actions;
export default userSlice.reducer;
