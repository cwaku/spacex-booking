import React from 'react';

export default function Mission(props) {
  const {mission_name, description} = props.data;
  const {status} = props
  return (
    <>
      <tr>
        <th>{mission_name}</th>
        <td>{description}</td>
        <td><span className={status}>Not a member</span></td>
        <td><button className="join-btn">Join Mission</button></td>
      </tr>
    </>
  );
}
