import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookingListPage() {
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

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const { roomId } = useParams();
  const [thisDay, setThisDay] = useState("");
  const [thisMonth, setThisMonth] = useState("");
  const [thisDate, setThisDate] = useState("");

  const [dailyEvent, setDailyEvent] = useState([]);
  const [thisWeekEvent, setThisWeekEvent] = useState([]);
  const [nextWeekEvent, setNextWeekEvent] = useState([]);
  const [monthEvent, setMonthEvent] = useState([]);
  const [showEvent, setShowEvent] = useState("this week");

  const getDailyEvent = (thisFullDate) => {
    const event = [];
    bookingData.forEach((item, index) => {
      if (roomId === item.roomId) {
        if (
          thisFullDate >= item.startTime.slice(0, 10) &&
          thisFullDate <= item.endTime.slice(0, 10)
        ) {
          event.push(item);
        }
      }
    });
    setDailyEvent(event);
  };

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

  const getWeekEvent = (date) => {
    const weekNo = calWeekNo(date);
    const thisWeek = [];
    const nextWeek = [];

    bookingData.forEach((item) => {
      const startDate = new Date(item.startTime);
      const endDate = new Date(item.endTime);
      if (
        date.getFullYear() !== startDate.getFullYear() &&
        date.getFullYear() !== endDate.getFullYear()
      ) {
        return;
      }
      if (roomId === item.roomId) {
        const StartBookingWeekNumber = calWeekNo(item.startTime);
        const EndBookingWeekNumber = calWeekNo(item.endTime);
        if (
          weekNo >= StartBookingWeekNumber &&
          weekNo <= EndBookingWeekNumber
        ) {
          thisWeek.push(item);
        } else if (
          weekNo + 1 >= StartBookingWeekNumber &&
          weekNo + 1 <= EndBookingWeekNumber
        ) {
          nextWeek.push(item);
        }
      }
    });
    setThisWeekEvent(thisWeek);
    setNextWeekEvent(nextWeek);
  };

  const getMonthEvent = (date) => {
    const event = [];
    bookingData.forEach((item) => {
      const startDate = new Date(item.startTime);
      const endDate = new Date(item.endTime);
      if (
        date.getFullYear() !== startDate.getFullYear() &&
        date.getFullYear() !== endDate.getFullYear()
      ) {
        return;
      }
      if (roomId === item.roomId) {
        if (
          startDate.getMonth() === date.getMonth() ||
          endDate.getMonth() === date.getMonth()
        ) {
          event.push(item);
        }
      }
    });
    setMonthEvent(event);
  };

  useEffect(() => {
    const fetch = async () => {
      const date = new Date("2019-09-28 13:00:00"); //mockup for test

      setThisDate(date.getDate());
      setThisDay(weekday[date.getDay()]);
      setThisMonth(month[date.getMonth()]);
      getDailyEvent(date.toISOString().split("T")[0]);
      getWeekEvent(date);
      getMonthEvent(date);
    };

    fetch();
  }, []);

  return (
    <div className="w-screen h-screen bg-bggray flex justify-center items-center">
      <div className="w-5/6 h-5/6 flex">
        <div className="w-2/5">
          <div className="h-3/5 bg-deepblue">
            <div className="flex flex-col items-end">
              <div className="bg-blue w-5/6 h-24">
                <div className="mt-10 ml-8">
                  <span className="text-white text-4xl font-bold">
                    {roomId}
                  </span>
                </div>
              </div>
              <div className="mt-16 w-5/6 h-40 flex flex-col">
                <div>
                  <p className="text-white ">Upcoming</p>
                </div>
                <div className="text-4xl font-thin mt-5">
                  <p className="text-white ">{thisDay}</p>
                  <p className="text-white">
                    {thisDate} {thisMonth.slice(0, 3)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 bg-deepblue2 flex flex-col items-end">
            <div className="w-5/6 h-52 mt-2 flex flex-col gap-4">
              {dailyEvent.length > 0 ? (
                dailyEvent.map((item) => {
                  return (
                    <div key={item.id}>
                      <p className="text-white ">
                        {item.startTime.slice(-8)} - {item.endTime.slice(-8)}
                      </p>
                      <p className="text-white ">{item.title}</p>
                    </div>
                  );
                })
              ) : (
                <p className="text-white">No event in this day</p>
              )}
            </div>
          </div>
        </div>
        <div className="h-full w-3/5 bg-white flex flex-col">
          <div className="w-full bg-navgray h-24 flex flex-col justify-end">
            <div className="flex">
              <div
                className="ml-10 cursor-pointer"
                onClick={() => setShowEvent("this week")}
              >
                <span
                  className={`text-xl font-bold ${
                    showEvent === "this week" ? "underline" : ""
                  }`}
                >
                  This Week
                </span>
              </div>
              <div
                className="ml-10 cursor-pointer"
                onClick={() => setShowEvent("next week")}
              >
                <span
                  className={`text-xl font-bold ${
                    showEvent === "next week" ? "underline" : ""
                  }`}
                >
                  Next Week
                </span>
              </div>
              <div
                className="ml-10 cursor-pointer"
                onClick={() => setShowEvent("whole month")}
              >
                <span
                  className={`text-xl font-bold ${
                    showEvent === "whole month" ? "underline" : ""
                  }`}
                >
                  Whole Month
                </span>
              </div>
            </div>
          </div>
          {showEvent === "this week" ? (
            <div>
              {thisWeekEvent.length > 0 ? (
                thisWeekEvent.map((item) => {
                  return (
                    <div key={item.id} className="flex flex-col gap-1 pl-10">
                      <p>{item.startTime.slice(0, 10)}</p>
                      <p className="text-black ">
                        {item.startTime.slice(-8)} - {item.endTime.slice(-8)}
                      </p>
                      <p className="text-black ">{item.title}</p>
                      <hr className="w-52" />
                    </div>
                  );
                })
              ) : (
                <p className="pl-10 pt-10">No event in this week</p>
              )}
            </div>
          ) : (
            ""
          )}
          {showEvent === "next week" ? (
            <div>
              {nextWeekEvent.length > 0 ? (
                nextWeekEvent.map((item) => {
                  return (
                    <div key={item.id} className="flex flex-col gap-1 pl-10">
                      <p>{item.startTime.slice(0, 10)}</p>
                      <p className="text-black ">
                        {item.startTime.slice(-8)} - {item.endTime.slice(-8)}
                      </p>
                      <p className="text-black ">{item.title}</p>
                      <hr className="w-52" />
                    </div>
                  );
                })
              ) : (
                <p className="pl-10 pt-10">No event in Next week</p>
              )}
            </div>
          ) : (
            ""
          )}
          {showEvent === "whole month" ? (
            <div>
              {monthEvent.length > 0 ? (
                monthEvent.map((item) => {
                  return (
                    <div key={item.id} className="flex flex-col gap-1 pl-10">
                      <p>{item.startTime.slice(0, 10)}</p>
                      <p className="text-black ">
                        {item.startTime.slice(-8)} - {item.endTime.slice(-8)}
                      </p>
                      <p className="text-black ">{item.title}</p>
                      <hr className="w-52" />
                    </div>
                  );
                })
              ) : (
                <p className="pl-10 pt-10">No event in this month</p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingListPage;
