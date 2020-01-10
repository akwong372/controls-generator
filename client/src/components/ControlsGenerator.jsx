import React from 'react';
import axios from 'axios';

class ControlsGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'Paste JSON here!'};

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

  render() {
    return (
      <div>
        <h1>Controls Generator</h1>

        <form onSubmit={this.handleSubmit} >
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    );
  }
}

export default ControlsGenerator;
