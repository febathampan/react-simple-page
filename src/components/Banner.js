import React, { useState } from "react";
import profileImage from "../profileImage.png";
import workspace from "../workspace.jpg";
import "../App.css";

/**This is the component for displaying the main image on the landing screen.
 * This component uses state to change image on button click
 *
 */
function Banner() {
  /**Using state to change image on button click */
  const [myImg, setMyImage] = useState(profileImage);

  const changeImage = () => {
    console.log("Button clicked - State change");
    if (myImg === profileImage) {
      setMyImage(workspace);
    } else {
      setMyImage(profileImage);
    }
  };

  return (
    <div>
      <div>
        <button className="btn btn-dark" onClick={changeImage}>
          Change image
        </button>
      </div>
      <div className="container">
        <img
          src={myImg}
          className="profile-img rounded-circle "
          alt="feba's profile"
        />
      </div>
    </div>
  );
}

export default Banner;
