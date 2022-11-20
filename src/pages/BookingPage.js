import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const [roomId, setRoomId] = useState("A101");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/roomevent/${roomId}`);
  };

  return (
    <div className="w-screen h-screen bg-bggray flex justify-center ">
      <div className="mt-20 h-2/6 w-2/6 bg-deepblue  flex flex-col items-center rounded-xl">
        <p className="text-white text-xl">Booking</p>

        <form
          className="flex flex-col items-center gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="A101">A101</option>
            <option value="A102">A102</option>
            <option value="Auditorium">Auditorium</option>
          </select>
          <div>
            <button className="bg-white w-20 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
