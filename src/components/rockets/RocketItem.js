import '../css/RocketItem.css';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/store/rockets';
import { cancelReservation } from '../../redux/store/rockets';
// create view for rocket item

const RocketItem = ({ rocket }) => {
  const { rocket_id, rocket_name, description, flickr_images, reserved } = rocket;
  const dispatch = useDispatch();
  return (
    <div className="rocket-item">
      <div className="rocket-item__image">
        <img src={flickr_images} alt={rocket_name} />
      </div>
      <div className="rocket-item__info">
        <h2 className="rocket-item__name">{rocket_name}</h2>
        <p className="rocket-item__description"><span className={reserved ? 'status' : ' '}>{reserved ? 'Reserved' : ''}</span>{description}</p>
        <div>
        <button
          className={reserved === true ? 'disabled' : 'rocket-item__reserve-btn'}
          onClick={ () => (reserved ? dispatch(cancelReservation(rocket_id)) : dispatch(reserveRocket(rocket_id)))}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
        </div>
      </div>
    </div>
  );
}

export default RocketItem;