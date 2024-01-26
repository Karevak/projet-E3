import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Clement GRECO",
          "Pierre-Etienne BERNARD",
          "Vincent CACCIATORE",
          "Francois ZANNIER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
