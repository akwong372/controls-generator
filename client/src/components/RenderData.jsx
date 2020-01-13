import React from 'react';

class RenderData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <textarea readOnly rows="10" cols="40" value={this.props.submitValue} />
      </div>
    );
  }
}

export default RenderData;
