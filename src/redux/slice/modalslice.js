const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  editUserModal: false,
};
const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    seteditUserModal: (state, action) => {
      state.editUserModal = action.payload;
    },
  },
});

export const { seteditUserModal } = modalSlice.actions;
export default modalSlice.reducer;
