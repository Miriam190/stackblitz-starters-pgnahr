import React from "react";
import "../style.css";
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
function ErrorBoundaryTest() {
  // const [hasError, setHasError] = useState(false);
  function ErrorBoundaryTest() {
   
    throw new Error("sorry!.....  something went wrong😥");
  }
  return (
    <div class="errorBoundarytest">
      <h1>Error Boundary Test :</h1>
      <p>
        <button class="errorbtn" onClick = {ErrorBoundaryTest} >
          ErrorBoundary test
        </button>
        <ErrorBoundary />
      </p>
    </div>
  );
  }
export default ErrorBoundaryTest;
