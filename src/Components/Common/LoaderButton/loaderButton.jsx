import React from "react";

const LoaderButton = ({text,styleClass,loadingButtonStatus}) => {
  return (
    <button
      className={styleClass}
      type="submit"
      disabled={loadingButtonStatus}
    >
      {text } {" "}
      {loadingButtonStatus ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </>
      ) : (
        <></>
      )}
    </button>
  );
};

export default LoaderButton;
