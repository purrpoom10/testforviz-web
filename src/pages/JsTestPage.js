import React, { useState } from "react";
import RoomEventList from "../components/ui/RoomEventList";

function JsTestPage() {
  const [roomId, setRoomId] = useState("A101");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isAvail, setIsAvail] = useState("");

  const [roomIdB, setRoomIdB] = useState("A101");
  const [dateB, setDateB] = useState("");
  const [roomEvent, setRoomEvent] = useState([]);

  const bookingData = [
    {
      id: 1,
      roomId: "A101",
      startTime: "2019-09-28 13:00:00", //weekNo39
      endTime: "2019-09-28 14:00:00",
      title: "Lunch with Petr"
    },
    {
      id: 2,
      roomId: "A101",
      startTime: "2019-09-28 14:00:00", //weekNo39
      endTime: "2019-09-28 15:00:00",
      title: "Sales Weekly Meeting"
    },
    {
      id: 3,
      roomId: "A101",
      startTime: "2019-09-28 16:00:00", //weekNo39
      endTime: "2019-09-28 18:00:00",
      title: "Anastasia Website Warroom"
    },
    {
      id: 4,
      roomId: "A101",
      startTime: "2019-09-29 13:00:00", //weekNo39
      endTime: "2019-09-29 14:00:00",
      title: "One-on-One Session"
    },
    {
      id: 5,
      roomId: "A101",
      startTime: "2019-09-29 16:00:00", //weekNo39
      endTime: "2019-09-29 18:00:00",
      title: "UGC Sprint Planning"
    },
    {
      id: 6,
      roomId: "A102",
      startTime: "2019-09-30 09:00:00", //weekNo40
      endTime: "2019-10-04 18:00:00",
      title: "5-Day Design Sprint Workshop"
    },
    {
      id: 7,
      roomId: "Auditorium",
      startTime: "2019-09-19 09:00:00", //weekNo38 39
      endTime: "2019-09-23 19:00:00",
      title: "Thai Tech Innovation 2019"
    },
    {
      id: 8,
      roomId: "A101",
      startTime: "2019-09-28 10:00:00", //weekNo39
      endTime: "2019-09-28 13:00:00",
      title: "Raimonland project"
    },
    {
      id: 9,
      roomId: "A102",
      startTime: "2019-09-30 18:00:00", //weekNo40
      endTime: "2019-09-30 20:00:00",
      title: "Management Meetinng"
    },
    {
      id: 10,
      roomId: "A101",
      startTime: "2019-10-04 14:00:00", //weekNo40
      endTime: "2019-10-06 11:00:00",
      title: "3-day workshop Corgi costume"
    }
  ];

  const checkAvailability = (roomId, startTime, endTime) => {
    const notAvail = [];

    bookingData.forEach((item, index) => {
      if (item.roomId === roomId) {
        if (
          (startTime <= item.startTime && item.startTime <= endTime) ||
          (item.startTime <= startTime && startTime <= item.endTime)
        ) {
          notAvail.push(item);
        }
      }
    });

    return notAvail.length > 0 ? "Busy" : "Available";
  };

  // console.log(
  //   checkAvailability("A101", "2022-09-28 12:00:00", "2022-09-28 13:00:00")
  // );

  const calWeekNo = (date) => {
    const bookingDate = new Date(date);
    const startDate = new Date(bookingDate.getFullYear(), 0, 1);
    const BookingWeekNumber = Math.ceil(
      (bookingDate - startDate + 24 * 60 * 60 * 1000) /
        (24 * 60 * 60 * 1000) /
        7
    );
    return BookingWeekNumber;
  };

  const getBooking = (roomId, weekNo) => {
    const bookings = [];
    bookingData.forEach((item) => {
      if (roomId === item.roomId) {
        const StartBookingWeekNumber = calWeekNo(item.startTime);
        const EndBookingWeekNumber = calWeekNo(item.endTime);
        if (
          (weekNo >= StartBookingWeekNumber &&
            weekNo <= EndBookingWeekNumber) ||
          (weekNo + 1 >= StartBookingWeekNumber &&
            weekNo + 1 <= EndBookingWeekNumber)
        ) {
          bookings.push(item);
        }
      }
    });
    return bookings.length > 0 ? bookings : "";
  };

  console.log(getBooking("Auditorium", 39));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startTime || !endTime || !startDate || !endDate) {
      return alert("กรุณากรอกข้อมูลให้ครบ");
    }
    const check = checkAvailability(
      roomId,
      startDate + " " + startTime,
      endDate + " " + endTime
    );
    setIsAvail(check);
  };

  const handleSubmitB = (e) => {
    e.preventDefault();
    if (!roomIdB || !dateB) {
      return alert("กรุณากรอกข้อมูลให้ครบ");
    }
    const thisWeekNo = calWeekNo(dateB);
    const data = getBooking(roomIdB, thisWeekNo);
    if (data) {
      setRoomEvent(data);
    } else {
      setRoomEvent("");
    }
  };

  return (
    <div>
      <div className="w-screen h-screen bg-bggray flex flex-col items-center ">
        <div className="mt-5 h-3/6 w-3/6 bg-deepblue  flex flex-col items-center rounded-xl">
          <p className="text-white text-xl">Venue Booking System A</p>

          <form
            className="flex flex-col items-center gap-4 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p>RoomId :</p>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                >
                  <option value="A101">A101</option>
                  <option value="A102">A102</option>
                  <option value="Auditorium">Auditorium</option>
                </select>
              </div>
              <div className="flex gap-1">
                <p>StartTime :</p>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="flex gap-1">
                <p>EndTime :</p>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="bg-white w-20 rounded-md">Submit</button>
            </div>
          </form>
          {isAvail ? (
            <div className="text-white mt-10">
              <p className="text-3xl">
                Room {roomId} is : {isAvail}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-5 h-3/6 w-3/6 bg-deepblue  flex flex-col items-center rounded-xl">
          <p className="text-white text-xl">Venue Booking System B</p>

          <form
            className="flex flex-col items-center gap-4 mt-4"
            onSubmit={handleSubmitB}
          >
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p>RoomId :</p>
                <select
                  value={roomIdB}
                  onChange={(e) => setRoomIdB(e.target.value)}
                >
                  <option value="A101">A101</option>
                  <option value="A102">A102</option>
                  <option value="Auditorium">Auditorium</option>
                </select>
              </div>
              <div className="flex gap-1">
                <p>Date :</p>
                <input
                  type="date"
                  value={dateB}
                  onChange={(e) => setDateB(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="bg-white w-20 rounded-md">Submit</button>
            </div>
          </form>
          {roomEvent ? (
            roomEvent.map((item) => <RoomEventList props={item} />)
          ) : (
            <p>No event in this week and next week</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JsTestPage;
