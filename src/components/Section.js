import React from "react";
import "../App.css";
/**This is acomponent designed to display details in single cards.
 * It can be reuse with different property values
 *
 * props: title, subhead, data, bg
 * bg - background color for the Section
 * data - content in the Section
 *  */
function Section(props) {
  const myStyle = props.bg + " container-fluid text-center";
  return (
    <div>
      <div className={myStyle}>
        <h3>{props.title}</h3>
        <h6>{props.subhead}</h6>
        <p>{props.data}</p>
      </div>
    </div>
  );
}
export default Section;
