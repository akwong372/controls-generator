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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {}

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    this.setState({
      isSubmit: true,
      submitValue: this.state.value
    });

    const data = {
      title: this.state.title,
      body: this.state.body
    };

    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then(res => {
        console.log('Response', res);
      })
      .catch(err => {
        console.log('Error', err);
      });

    e.preventDefault();
  }

  renderData() {
    return <RenderData submitValue={this.state.submitValue} />;
  }

  render() {
    return (
      <div>
        <h2>controls generator</h2>
        <form onSubmit={this.onSubmit}>
          <label>
            <textarea
              type='text'
              placeholder='Paste JSON here!'
              onChange={this.onChange}
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
