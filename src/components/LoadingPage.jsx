import React from "react";

const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center text-center">
      <div className="spinner-border text-danger " role="status "  style={{"width": "6rem" , "height": "6rem"}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
