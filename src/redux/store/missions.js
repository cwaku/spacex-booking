import { createSlice } from '@reduxjs/toolkit';

// slice
const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    missionsError: (state, action) => {
      state.error = action.payload;
    }
    , missionsSuccess: (state, action) => {
      state.missions = action.payload;
      state.loading = false;
    }
    , joinMission: (state, action) => {
      const Mission = state.missions.find(Mission => Mission.id === action.payload);
      Mission.status = 'booked';
    }
    , cancelReservation: (state, action) => {
      const Mission = state.missions.find(Mission => Mission.id === action.payload);
      Mission.status = '';
    }
  }
});

export default missionsSlice.reducer;

//Actions
export const { missionsSuccess, joinMission, cancelReservation , missionsError } = missionsSlice.actions;
