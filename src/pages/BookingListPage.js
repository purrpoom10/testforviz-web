import React from "react";
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

  const { roomId } = useParams();
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
              <div className="mt-16 w-5/6 h-52 border-2 flex flex-col justify-between">
                <div>
                  <p className="text-white ">Upcoming</p>
                </div>
                <div className="text-4xl font-thin">
                  <p className="text-white ">Monday</p>
                  <p className="text-white">28 Sep</p>
                </div>
                <div>
                  <p className="text-white ">Monday</p>
                  <p className="text-white">28 Sep</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 bg-deepblue2 flex flex-col items-end">
            <div className="w-5/6 h-52 border-2 mt-3 flex flex-col gap-4">
              <div>
                <p className="text-white ">15.00-16.00</p>
                <p className="text-white ">Meeting</p>
              </div>
              <div>
                <p className="text-white ">15.00-16.00</p>
                <p className="text-white ">Meeting</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-3/5 bg-white">test</div>
      </div>
    </div>
  );
}

export default BookingListPage;
