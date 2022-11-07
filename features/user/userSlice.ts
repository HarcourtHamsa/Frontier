import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    id: null,
  },
  reducers: {
    authenticate(state, { payload }) {
      state.isAuthenticated = true;
      state.id = payload.id;
    },

    logout(state) {
      (state.isAuthenticated = false), (state.id = null);
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
