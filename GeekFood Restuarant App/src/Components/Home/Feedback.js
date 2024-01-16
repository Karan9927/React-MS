import React from "react";

const Feedback = (props) => {
  return (
    <div className="feedback-container">
      <p className="comment">{props.comment}</p>
      <div className="avatar-container">
        <div>
          <img
            className="avatar-image"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            alt="avatar"
          />
        </div>
        <div>
          <p className="text-[14px] font-semibold">{props.name}</p>
          <p className="text-[14px]">{props.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
