import React from "react";
import logo from "../assets/y-logo-white.png";

export function Header({ isVisible, handleClick }) {
  return (
    <div id="header">
      <div className="image-backgroud">
        <div className="overlay-view">
          {isVisible === true ? (
            <div className="isVisible-on">
              <div className="view-logo-on">
                <img alt="logo" className="logo" src={logo} />
              </div>
              <div className="view-text-on">
                <div className="title-header">Hello! I'm Muhammad Luthfi</div>
                <div className="title-type">
                  Consult, Design, and Develop Websites
                </div>
                <div className="text-desc">
                  Have something great in mind? Fell freeto contact me.
                </div>
                <div className="text-desc">
                  I,ll help you to make it happen.
                </div>
                <div className="view-button">
                  <button onClick={() => handleClick()} className="button">
                    LET'S MAKE CONTACT
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="isVisible-off">
              <div className="view-logo-off">
                <img alt="logo" className="logo" src={logo} />
              </div>
              <div className="view-text-off">
                <div className="title-header">Hello! I'm Muhammad Luthfi</div>
                <div className="title-type">
                  Consult, Design, and Develop Websites
                </div>
                <div className="text-desc">
                  Have something great in mind? Fell freeto contact me.
                </div>
                <div className="text-desc">
                  I,ll help you to make it happen.
                </div>
                <div className="view-button">
                  <button onClick={() => handleClick()} className="button">
                    LET'S MAKE CONTACT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
