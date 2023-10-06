import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Talbi ikram',
      bio: 'A web developer',
      imgSrc: process.env.PUBLIC_URL + '/fph.jpg',
      profession: 'Web Developer',
    },
    show: false,
    mountedTime: null,
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date().toLocaleTimeString() });
    // Set up an interval to update the mounted time every second
    this.intervalId = setInterval(
      () =>
        this.setState({
          mountedTime: new Date().toLocaleTimeString(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Person" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Mounted Time: {this.state.mountedTime}</p>
      </div>
    );
  }
}

export default App;
