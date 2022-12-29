//minimize.com/

import React, { useEffect, useState, type ReactElement } from "react";
// import { type NextPage } from "next";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
// import heroPhoto1 from "../public/heroPhoto1.jpg";
// import Image from 'next/image';

const HomePage = (): ReactElement => {
  const [toggle, setToggle] = useState<Boolean>(true);
  const handleClose = () => {
    setToggle(false);
  };
  const handleOpen = () => {
    setToggle(true);
  };

  return (
    <div className="grid w-screen h-screen grid-cols-2 place-items-center">
      <div className="self-center">
        {/* <Image src={heroPhoto1} alt="" /> */}
        <h1 className="text-3xl"> Curate, Sort, Free your Life.</h1>
      </div>

      <div className="flex flex-col items-center h-auto my-5 bg-white rounded-md shadow-md justify-right w-80">
        {toggle ? (
          <SignIn handleClose={handleClose} />
        ) : (
          <Register handleOpen={handleOpen} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
