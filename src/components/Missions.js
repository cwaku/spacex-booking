import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apis from './Apis';
import './css/Missions.css';
import Mission from './Missions/Mission';

export default function Missions() {
  const [missions, displayMissions] = useState([]);
  useEffect(prev => {
    axios.get(Apis.missions).then((res) => {
      displayMissions(res.data.map(((mission) => <Mission key={mission.mission_id} status='not-member' data={mission}/>)));
    }).catch((error) => {
      console.warn(error);
    })
  }, [])
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
          {missions}
        </tbody>
      </table>
    </>
  );
}
