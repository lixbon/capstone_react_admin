import { localServ } from "../../services/localService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLogin: true,
  user: localServ.user.get(),
  editinguser: {},
  editedUser: {},
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
    setEditedUserInfor: (state, action) => {
      state.editedUser = action.payload;
    },
  },
});

export const { setUserInfor, setEditingUserInfor, setEditedUserInfor } =
  userSlice.actions;
export default userSlice.reducer;
