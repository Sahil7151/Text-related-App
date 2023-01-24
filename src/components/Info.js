import React from "react";

export default function Info() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasRightLabel">
            DEVELOPER INFORMATION
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h4>KHAN SAHIL TAHIR</h4>
          <br />
          <h6>
            AGE = 19 <br /> Born and brought up in AMBERNATH dist-THANE.
          </h6>
          <br />
          <p>
            <strong>Currently in 3rd year of B.E IT at MHSSCOE MUMBAI</strong>
          </p>
        </div>
      </div>
    </>
  );
}
