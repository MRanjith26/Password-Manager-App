import './index.css'

const backgroundStyles = ['brown', 'green', 'maroon', 'blue', 'red']

const ManagerItem = props => {
  const {passwordDetails, isHidden, getDeleteId} = props
  const {id, website, username, password} = passwordDetails

  const bgColor = Math.ceil(Math.random() * backgroundStyles.length - 1)
  const initial = website[0].toUpperCase()

  const getButtonId = () => {
    getDeleteId(id)
  }

  return (
    <li className="password-item">
      <p className={`initial-text ${backgroundStyles[bgColor]}`}>{initial}</p>
      <div className="details-container">
        <p className="website-name">{website}</p>
        <p className="user-name">{username}</p>
        {isHidden && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="stars"
            className="star-icon"
          />
        )}
        {!isHidden && <p className="user-name">{password}</p>}
      </div>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={getButtonId}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default ManagerItem
