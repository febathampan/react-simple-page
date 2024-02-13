import React from "react";
/**This is the component for the header.
 * props: name
 */
class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-blue">
        <h1>{this.props.name}</h1>
        <h3 className="text-muted">Profile</h3>
      </div>
    );
  }
}

export default Header;
