import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/Missions.css';
import Mission from './Missions/Mission';
import fetchMissions from './Missions/FetchMissions';

export default function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <>
      <table id="missions_table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map(((mission) => (
              <Mission
                key={mission.mission_id}
                status={missions.find((item) => item.mission_id === mission.mission_id).status}
                data={mission}
              />
            )
            ))
          }
        </tbody>
      </table>
    </>
  );
}
