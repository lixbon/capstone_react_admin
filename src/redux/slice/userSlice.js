import { localServ } from "../../services/localService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLogin: true,
  user: localServ.user.get(),
  editinguser: {},
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.user = action.payload;
    },
    setEditingUserInfor: (state, action) => {
      state.editinguser = action.payload;
    },
  },
});

export const { setUserInfor, setEditingUserInfor } = userSlice.actions;
export default userSlice.reducer;
