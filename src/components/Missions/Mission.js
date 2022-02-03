import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { joinMission, leaveMission } from '../../redux/store/missions';
export default function Mission(props) {
  const dispatch = useDispatch();
  const {mission_name, mission_id, description, status} = props.data;
  return (
    <>
      <tr>
        <th>{mission_name}</th>
        <td>{description}</td>
        <td><span className={status === 'booked' ? 'member' : 'not-member'}>{status === 'booked' ? 'Member' : 'Not a member'}</span></td>
        <td><button
        onClick={() => (status === "booked" ? dispatch(leaveMission(mission_id)) : dispatch(joinMission(mission_id)))}
        className={status === 'booked' ? 'leave-btn' : 'join-btn'}
        >
          {status === 'booked' ? 'Leave mission' : 'Join mission'}
        </button></td>
      </tr>
    </>
  );
}
