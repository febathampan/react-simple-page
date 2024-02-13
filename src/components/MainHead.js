import React from "react";
/**MainHead is the component for including elements like link.
 * This is done to include Bootstrap in the application.
 */

class MainHead extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        ></link>
      </div>
    );
  }
}
export default MainHead;
