import { useSelector } from "react-redux";
import './css/Missions.css';
import Mission from './Missions/Mission';
export default function Missions() {
  const missions = useSelector(state => state.missions.missions);
  
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
            missions.map(((mission) => <Mission key={mission.mission_id} status={missions.find((item) => item.mission_id === mission.mission_id).status} data={mission}/>))
          }
        </tbody>
      </table>
    </>
  );
}
