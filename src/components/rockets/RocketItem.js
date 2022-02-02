// create view for rocket item

const RocketItem = ({ rocket }) => {
  const { rocket_id, rocket_name, description, flickr_images, reserved } = rocket;
  return (
    <div className="rocket-item">
      <div className="rocket-item__image">
        <img src={flickr_images} alt={rocket_name} />
      </div>
      <div className="rocket-item__info">
        <h2 className="rocket-item__name">{rocket_name}</h2>
        <p className="rocket-item__description">{description}</p>
        <button
          className="rocket-item__reserve-btn"
          disabled={reserved}
          onClick={() => console.log('reserve')}
        >
          {reserved ? 'Reserved' : 'Reserve'}
        </button>
      </div>
    </div>
  );
}

export default RocketItem;