import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        halo, {this.props.name}!
      </div>
    );
  },
});
