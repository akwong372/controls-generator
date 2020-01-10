import React from 'react';
import axios from 'axios';

import RenderData from './RenderData.jsx';

class ControlsGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:'',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  renderData() {
    return <RenderData value={this.state.value} />
  }

  render() {
    return (
      <div>
        <h1>Controls Generator</h1>

        <form onSubmit={this.handleSubmit} >
          <label>
            <textarea type="text" placeholder="Paste JSON here!" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.submitted && this.renderData()}
      </div>
    );
  }
}

export default ControlsGenerator;
