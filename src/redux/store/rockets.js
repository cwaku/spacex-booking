import createSlice from '@reduxjs/toolkit';

//slice
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: false,
    error: null,
  },
  reducers: {
    //reducers go here
    //reducer for loading
    rocketsLoading: (state) => {
      state.loading = true;
    }
    //reducer for error
    , rocketsError: (state, action) => {
      state.error = action.payload;
    }
    //reducer for success
    , rocketsSuccess: (state, action) => {
      state.rockets = action.payload;
      state.loading = false;
    }
  }
});

export default rocketsSlice.reducer;

//Actions