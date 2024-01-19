import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import ManagerItem from '../ManagerItem/index'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    PasswordsList: [],
    isHidden: true,
    searchInput: '',
  }

  onCheck = () => {
    const {isHidden} = this.state
    this.setState(prevState => ({isHidden: !prevState.isHidden}))
    console.log(isHidden)
  }

  onAddPasswordDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPasswordDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      PasswordsList: [...prevState.PasswordsList, newPasswordDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  onAddWebsite = event => {
    this.setState({
      website: event.target.value,
    })
    console.log(event.target.value)
  }

  onAddUsername = event => {
    this.setState({
      username: event.target.value,
    })
    console.log(event.target.value)
  }

  onAddPassword = event => {
    this.setState({
      password: event.target.value,
    })
    console.log(event.target.value)
  }

  onSearchInputValue = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getDeleteId = id => {
    const {PasswordsList} = this.state
    const filteredPasswordsList = PasswordsList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({PasswordsList: filteredPasswordsList})
  }

  render() {
    const {
      website,
      username,
      password,
      PasswordsList,
      isHidden,
      searchInput,
    } = this.state

    const searchedResultsList = PasswordsList.filter(EachItem =>
      EachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const passWordsListLength = searchedResultsList.length !== 0

    return (
      <div className="password-manager">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="first-container">
            <div className="form-container">
              <form className="form-card" onSubmit={this.onAddPasswordDetails}>
                <h1 className="form-title">Add New Password</h1>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input-icon"
                    />
                  </div>

                  <input
                    type="text"
                    className="input-text"
                    placeholder="Enter Website"
                    onChange={this.onAddWebsite}
                    value={website}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="input-icon"
                    />
                  </div>

                  <input
                    type="text"
                    className="input-text"
                    placeholder=" Enter Username"
                    onChange={this.onAddUsername}
                    value={username}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="input-icon"
                    />
                  </div>
                  <input
                    type="password"
                    className="input-text"
                    placeholder="Enter Password"
                    onChange={this.onAddPassword}
                    value={password}
                  />
                </div>
                <button className="form-button" type="submit">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="form-image"
            />
          </div>
          <div className="second-container">
            <div className="mini-container">
              <div className="count-container">
                <h1 className="password-title">Your Passwords</h1>
                <p className="count"> {PasswordsList.length}</p>
              </div>
              <div className="search-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                    alt=" search"
                    className="search-icon"
                  />
                </div>
                <input
                  type="search"
                  className="search-text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onSearchInputValue}
                />
              </div>
            </div>
            <div className="check-container">
              <input
                type="checkbox"
                className="check-box"
                id="check"
                onClick={this.onCheck}
              />
              <label htmlFor="check" className="label-name">
                Show Passwords
              </label>
            </div>
            {!passWordsListLength && (
              <div className="None-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                  alt="no passwords"
                  className="no-image"
                />
                <p className="none-text">No Passwords</p>
              </div>
            )}

            {passWordsListLength && (
              <ul className="passwords-container">
                {searchedResultsList.map(eachItem => (
                  <ManagerItem
                    passwordDetails={eachItem}
                    key={eachItem.id}
                    isHidden={isHidden}
                    getDeleteId={this.getDeleteId}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
