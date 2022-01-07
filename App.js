import { useState } from "react";
import axios from "axios";
export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [message, setMessage] = useState(" ");
  const [list, setList] = useState("");

  let appname = "MychatApp";
  let studentname = "Rohit Narwade";
  let studentid = 101;
  return (
    <div className="container-fluid">
      <div className="row bg-success">
        <div className="col-6">
          <h3>{appname}</h3>
        </div>
        <div className="col-6">
          [{studentname}] [{studentid}]
        </div>
      </div>
      <div className="row bg-info mt-3 p-4">
        <div className="">
          <input
            type="text"
            className="form-control form-control-lg mb"
            value=""
            placeholder="Lets chat here..."
          />
        </div>
        <div>
          <input type="button" className="btn btn-danger w-50" value="Send" />
        </div>
      </div>
    </div>
  );
}
