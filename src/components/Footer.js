import React from "react";
/**This is the footer component
 * props: year
 */
function Footer(props) {
  return (
    <div className="row bg-blue">
      <footer className="text-centre container-fluid">
        <h6 className="text-secondary">Copyrights@{props.year}</h6>
      </footer>
    </div>
  );
}
export default Footer;
