import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
