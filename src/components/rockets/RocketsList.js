import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../../redux/store/rockets";
import RocketItem from "./RocketItem";

const RocketsList = () => {
  const rockets = useSelector(state => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return rockets.map(rocket => (
    <RocketItem key={rocket.id} rocket={rocket} />
  ));
};

export default RocketsList;
