import React from "react";
import "./css/footer.css"

export default function footer() {
  return (
    <footer className="footer">
      <h4>&#169; IEEE SIT SB</h4>
      <h4>
        {" "}
        Follow Us on :
        <a href="www.instagram.com">
          <i className="fa fa-instagram"></i>
        </a>
      </h4>
    </footer>
  );
}
