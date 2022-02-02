// create view for rocket item

const RocketItem = ({ rocket }) => {
  const { id, name, description, image, reserved } = rocket;
  return (
    <div className="rocket-item">
      <div className="rocket-item__image">
        <img src={image} alt={name} />
      </div>
      <div className="rocket-item__info">
        <h2 className="rocket-item__name">{name}</h2>
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