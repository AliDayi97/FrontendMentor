import React, { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`flex bg-transparent absolute p-4  ${
        show && "shadow-lg w-full"
      }`}
    >
      <button onClick={() => setShow(!show)}>
        <BsFillCaretRightFill
          className={`${show && "rotate-180"} duration-200 w-6 h-6`}
        />
      </button>
      <ul
        className={`flex gap-6 mx-4 ${
          !show && "-translate-x-96 invisible"
        } duration-200`}
      >
        <li className="font-light text-sm text-center self-center">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link
            to="/FrontendMentor/order-summary-component"
            className="font-light text-sm self-center"
          >
            Order Summary Comp
          </Link>
        </li>
      </ul>
    </div>
  );
}
