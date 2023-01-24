import React,{useState,useEffect} from "react";

export default function Time() {
  const [time, setTime] = useState(Date().toLocaleString().split(", "));

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">🔈📢🔉 {time} 🔔🔊📣</h1>
          <p className="lead">
            🤠🤠 This is a real time or current running time.🤓🤓This time is
            respect to IST i.e Indian Standard Time.🧐🧐
          </p>
        </div>
      </div>
    </>
  );
}
