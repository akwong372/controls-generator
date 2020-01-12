import React from 'react';
import axios from 'axios';

import RenderData from './RenderData.jsx';

class ControlsGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      submitValue: '',
      isSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.postJSON();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      isSubmit: true,
      submitValue: this.state.value
    });
    event.preventDefault();
  }

  renderData() {
    return <RenderData submitValue={this.state.submitValue} />;
  }

  postJSON() {
    axios
      .post('/json', {
        firstName: 'Test',
        lastName: 'JSON'
      })
      .then(res => {
        console.log(`Response Data: ${res.data}`);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }

  render() {
    return (
      <div>
        <h2>controls generator</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              type='text'
              placeholder='Paste JSON here!'
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
        {this.state.isSubmit && this.renderData()}
      </div>
    );
  }
}

export default ControlsGenerator;
