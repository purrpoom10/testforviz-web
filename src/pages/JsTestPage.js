import React from "react";

function JsTestPage() {
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
          !(startTime < item.startTime && endTime <= item.startTime) ||
          (startTime >= item.endTime && endTime > item.endTime)
        ) {
          notAvail.push(item);
        }
      }
    });

    return notAvail.length > 0 ? false : true;
  };

  //   console.log(
  //     checkAvailability("A101", "2019-09-28 12:00:00", "2019-09-28 13:00:00")
  //   );

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
    return bookings.length > 0
      ? bookings
      : `No Booking in week ${weekNo} and ${weekNo + 1}`;
  };

  console.log(getBooking("Auditorium", 39));

  return <div>JsTestPage</div>;
}

export default JsTestPage;
