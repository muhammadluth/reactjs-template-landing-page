import React from "react";
import { Animated } from "react-animated-css";

export function NotificationTop({ isVisible, handleClose }) {
  return (
    <div className="notif">
      <Animated
        animationIn="slideInDown"
        animationOut="slideOutUp"
        isVisible={isVisible}
      >
        <div className="card notif-card">
          <div className="row row-notif">
            <div className="col-xl-3 col-md-12 col-sm-12" />
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-9 col-md-12 col-sm-12">
                  <p className="card-text notif-text">
                    By accessing and using this website, you acknowledge that
                    you have read and understand our
                    <a href="#"> Cookie Policy</a>,
                    <a href="#">Privacy Policy</a>, and our
                    <a href="#"> Terms of Service</a>.
                  </p>
                </div>
                <div className="col-xl-3 col-md-2 col-sm-2">
                  <button
                    onClick={() => handleClose()}
                    className="btn btn-primary text-white button-notif"
                  >
                    Go it
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-12 col-sm-12" />
          </div>
        </div>
      </Animated>
    </div>
  );
}
