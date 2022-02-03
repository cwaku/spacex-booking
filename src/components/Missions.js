import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apis from './Apis';
import './css/Missions.css';
import Mission from './Missions/Mission';

export default function Missions() {
  const [missions, displayMissions] = useState([]);
  const missionsData = [
    {
      id: 1,
      title: 'To the Moon',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe facere quaerat odit ipsam culpa ducimus, neque nesciunt autem in mollitia, accusantium ex consectetur? Eligendi ullam vitae molestias? Ex, soluta omnis?',
      status: 'member',
    },
    {
      id: 2,
      title: 'To the Moon 2',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe facere quaerat odit ipsam culpa ducimus, neque nesciunt autem in mollitia, accusantium ex consectetur? Eligendi ullam vitae molestias? Ex, soluta omnis?',
      status: 'not-member',
    },
  ];
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
