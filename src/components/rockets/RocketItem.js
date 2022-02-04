import '../css/RocketItem.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/store/rockets';
// create view for rocket item

const RocketItem = ({ rocket }) => {
  const {
    rocket_id: rocketId, rocket_name: rocketName,
    description, flickr_images: flickrImages, reserved,
  } = rocket;
  const dispatch = useDispatch();
  return (
    <div className="rocket-item">
      <div className="rocket-item__image">
        <img src={flickrImages} alt={rocketName} />
      </div>
      <div className="rocket-item__info">
        <h2 className="rocket-item__name">{rocketName}</h2>
        <p className="rocket-item__description">
          <span className={reserved ? 'status' : ' '}>{reserved ? 'Reserved' : ''}</span>
          {description}
        </p>
        <div>
          <button
            type="button"
            className={reserved === true ? 'disabled' : 'rocket-item__reserve-btn'}
            onClick={() => (reserved
              ? dispatch(cancelReservation(rocketId))
              : dispatch(reserveRocket(rocketId))
            )}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </div>
  );
};
RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  rocket_name: PropTypes.string,
  rocket_id: PropTypes.string,
  description: PropTypes.string,
};
RocketItem.defaultProps = {
  rocket: {},
  rocket_name: '',
  rocket_id: '',
  description: '',
};

export default RocketItem;
