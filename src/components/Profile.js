import React from 'react';
import './css/Profile.css'

export default function Profile() {
  const missions = JSON.parse(localStorage.getItem('missions')) || [];
  return (
    <div className='profile'>
      <section>
        <h2>My Missions</h2>
        <ul>
          {
            missions.map(mission => mission.status === "booked" ? <li>{mission.mission_name}</li> : null)
          }
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
      </section>
    </div>
  );
}
