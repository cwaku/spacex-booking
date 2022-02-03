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
        state.missions = state.missions.map(mission => mission.mission_id === action.payload ? ({...mission, status:'booked'}) : mission)
    }
    , leaveMission: (state, action) => {
      state.missions = state.missions.map(mission => mission.mission_id === action.payload ? ({...mission, status:''}) : mission)
    }
  }
});

export default missionsSlice.reducer;

//Actions
export const { missionsSuccess, joinMission, leaveMission , missionsError } = missionsSlice.actions;
