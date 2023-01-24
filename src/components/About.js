import React from "react";

export default function About(props) {
  return (
    <>
      <div>
        <div className="text-center">
          <div
            className="spinner-border text-danger"
            style={{ width: "3.5rem", height: "3.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow text-danger"
            style={{ width: "3.5rem", height: "3.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-border text-danger"
            style={{ width: "3.5rem", height: "3.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="row">
          <div className="col-4">
            <nav
              id="navbar-example3"
              className="h-100 flex-column align-items-stretch pe-4 border-end"
            >
              <nav
                className="nav nav-pills flex-column"
                style={{
                  color:
                    props.mode === "light"
                      ? "#643E46FF !important"
                      : "#e3c78a !important",
                }}
              >
                <a className="nav-link " href="#item-1">
                  Overview 😀:)
                </a>
                <a className="nav-link " href="#item-2">
                  how-to-operate? 😀:)
                </a>
                <a className="nav-link " href="#item-3">
                  Functionality 😀:)
                </a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ms-3 my-1 " href="#item-3-1">
                    😮Function no.🤗 1😯
                  </a>
                  <a className="nav-link ms-3 my-1 " href="#item-3-2">
                    😮Function no.🤗 2😯
                  </a>
                  <a className="nav-link ms-3 my-1 " href="#item-3-3">
                    😮Function no.🤗 3😯
                  </a>
                </nav>
              </nav>
            </nav>
          </div>

          <div
            className="col-8"
            style={{
              color: props.mode === "light" ? "#643E46FF" : "#e3c78a",
            }}
          >
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabIndex="0"
            >
              <div id="item-1">
                <h4>Overview :)</h4>
                <p>
                  🥳🎆Textutills is a Text based utility that is used or well
                  sufficient for performing a set of utility functions to do
                  operations on String objects. It is a app made using react js.
                  It has different Functionality from doing chnages into
                  text.🎉🎇
                </p>
              </div>
              <div id="item-2">
                <h4>how-to-operate? :)</h4>
                <p>
                  🥳🎆There was a text area given on the front page. Enter your
                  text in it and do suitable or required operations on it by
                  using provided funtions and methods. By completing your
                  operation you can copy your resultant text by using copy
                  button which make easier to carrier your obtained text.🎉🎇
                </p>
              </div>
              <div id="item-3">
                <h4>Functionality :)</h4>
                <p>
                  🥳🎆This app will provide some basic functions to play with
                  your text and they are as follows:-🎉🎇
                </p>
              </div>
              <div id="item-3-1">
                <h5>Function no. 1</h5>
                <p>
                  🥳🎆You can perform different operations on your text by
                  making use of provided buttons such as uppercase
                  conversion,lowercase conversion,capitalcase conversion,you can
                  remove extra spaces from the text,you can also copy aur clear
                  the text according to your wish.You will provided with the
                  confirmations of your operation on text by the means of popups
                  and alerts on your screen.🎉🎇
                </p>
              </div>
              <div id="item-3-2">
                <h5>Function no. 2</h5>
                <p>
                  🥳🎆By using this page you can also get yor word or characters
                  count simultaneously on the front page as well as you will
                  also provided by the average time required to read the entered
                  text so that it can help you to check or improve your reading
                  ability.🎉🎇
                </p>
              </div>
              <div id="item-3-3">
                <h5>Function no. 3</h5>
                <p>
                  🥳🎆This page also show your text preview which was shown at
                  bottom of your screen.🎉🎇
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
