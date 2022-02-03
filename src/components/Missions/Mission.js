import React from 'react';

export default function Mission(props) {
  const {mission_name, description} = props.data;
  const {status} = props
  return (
    <>
      <tr>
        <th>{mission_name}</th>
        <td>{description}</td>
        <td><span className={status === 'booked' ? 'member' : 'not-member'}>{status === 'booked' ? 'Member' : 'Not a member'}</span></td>
        <td><button className={status === 'booked' ? 'leave-btn' : 'join-btn'}>{status === 'booked' ? 'Leave mission' : 'Join mission'}</button></td>
      </tr>
    </>
  );
}
