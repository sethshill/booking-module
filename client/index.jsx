import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hi: '',
    };
  }

  componentDidMount() {
    this.getCoreData();
  }

  getCoreData() {
    axios.get('/booking/core/listingId/1')
      .then(response => console.log(response.data[0]))
      .catch(error => console.log(error));

    this.setState({
      hi: 'hello',
    });
  }


  render() {
    return (
      <div id="app">{this.state.hi}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('booking-module'));
