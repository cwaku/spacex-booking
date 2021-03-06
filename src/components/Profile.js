import React from 'react';
import { useSelector } from 'react-redux';
import './css/Profile.css';

export default function Profile() {
  const missions = JSON.parse(localStorage.getItem('missions')) || [];
  const joinedMissions = missions.filter((mission) => mission.status === 'booked');

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile">
      <section>
        <h2>My Missions</h2>
        <ul>
          {
            joinedMissions.map((mission) => (
              <li key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))
          }
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          {
            reservedRockets.map((rocket) => <li key={rocket.rocket_id}>{rocket.rocket_name}</li>)
          }
        </ul>
      </section>
    </div>
  );
}
