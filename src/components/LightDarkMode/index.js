// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  isChangedOn = () => {
    this.setState({isClicked: false})
  }

  isChangedOff = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="container">
        {isClicked ? (
          <div className="card-container-light">
            <h1 className="mode-title-light">Click To Change Mode</h1>
            <button className="button" type="button" onClick={this.isChangedOn}>
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="card-container-dark">
            <h1 className="mode-title-dark">Click To Change Mode</h1>
            <button
              className="button"
              type="button"
              onClick={this.isChangedOff}
            >
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
