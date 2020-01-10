import React from 'react';

class RenderData extends React.Component {
  constructor(props) {
    super(props);

    }

    render() {
      return (
      <div>
        <h4>{this.props.value}</h4>
      </div>
    )
  }
}

export default RenderData;