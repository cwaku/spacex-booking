import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/store/missions';

const Mission = ({ data }) => {
  const dispatch = useDispatch();
  const {
    mission_name: missionName, mission_id: missionId, description, status,
  } = data;
  return (
    <>
      <tr>
        <th>{missionName}</th>
        <td>{description}</td>
        <td><span className={status === 'booked' ? 'member' : 'not-member'}>{status === 'booked' ? 'Member' : 'Not a member'}</span></td>
        <td>
          <button
            type="button"
            onClick={() => (status === 'booked' ? dispatch(leaveMission(missionId)) : dispatch(joinMission(missionId)))}
            className={status === 'booked' ? 'leave-btn' : 'join-btn'}
          >
            {status === 'booked' ? 'Leave mission' : 'Join mission'}
          </button>
        </td>
      </tr>
    </>
  );
};
Mission.defaultProps = {
  data: {},
  mission_name: '',
  mission_id: '',
  description: '',
  status: '',
};
Mission.propTypes = {
  data: PropTypes.PropTypes.instanceOf(Object),
  mission_name: PropTypes.string,
  mission_id: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};
export default Mission;
