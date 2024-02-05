import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={onClickEvent()}>
        <img src={imageUrl} alt={name} className="event-img" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
