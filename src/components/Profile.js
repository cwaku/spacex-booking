import React from 'react';
import './css/Profile.css'

export default function Profile() {
  const missions = JSON.parse(localStorage.getItem('missions')) || [];
  const joinedMissions = missions.filter((mission) => mission.status === 'booked');
  return (
    <div className='profile'>
      <section>
        <h2>My Missions</h2>
        <ul>
          {
            joinedMissions.map(mission => <li>{mission.mission_name}</li>)
          }
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
      </section>
    </div>
  );
}
