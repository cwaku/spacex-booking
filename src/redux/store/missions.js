import { createSlice } from '@reduxjs/toolkit';
import Save from '../../components/Missions/SaveMissions';
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
      Save(action.payload);
    }
    , joinMission: (state, action) => {
      const newState = state.missions.map(mission => mission.mission_id === action.payload ? ({...mission, status:'booked'}) : mission)
      state.missions = newState;
      Save(newState);
    }
    , leaveMission: (state, action) => {
      const newState = state.missions.map(mission => mission.mission_id === action.payload ? ({...mission, status:''}) : mission)
      state.missions = newState;
      Save(newState);
    }
  }
});

export default missionsSlice.reducer;

//Actions
export const { missionsSuccess, joinMission, leaveMission , missionsError } = missionsSlice.actions;
