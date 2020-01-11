import React from 'react';

class RenderData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <textarea readOnly value={this.props.submitValue} />
      </div>
    )
  }
}

export default RenderData;