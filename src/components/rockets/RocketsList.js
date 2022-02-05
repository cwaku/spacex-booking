import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return rockets.map((rocket) => (
    <RocketItem key={rocket.id} rocket={rocket} />
  ));
};

export default RocketsList;
