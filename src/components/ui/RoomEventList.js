import React from "react";

function RoomEventList({ props }) {
  return (
    <div className="flex w-5/6 justify-between">
      <p>{props.title}</p>
      <div className="flex gap-4">
        <p>{props.startTime}</p>
        <p>{props.endTime}</p>
      </div>
    </div>
  );
}

export default RoomEventList;
