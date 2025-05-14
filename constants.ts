import { DailyRecords } from "@/app/records/types";
import { Live } from "./app/lives/types";

const lives: Live[] = [
  {
    id: "1",
    name: "Live 1",
    address: "Live stream 1 description",
    status: "hazardous",
  },
  {
    id: "2",
    name: "Live 2",
    address: "Live stream 2 description",
    status: "normal",
  },
  {
    id: "3",
    name: "Live 3",
    address: "Live stream 3 description",
    status: "danger",
  },
];

const records: DailyRecords[] = [
  {
    date: "2024-01-01",
    events: [
      {
        eventId: "1",
        cctv_name: "Record 1",
        address: "Description 1",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 1",
      },
      {
        eventId: "2",
        cctv_name: "Record 2",
        address: "Description 2",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 2",
      },
    ],
  },
  {
    date: "2024-01-02",
    events: [
      {
        eventId: "3",
        cctv_name: "Record 3",
        address: "Description 3",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 3",
      },
      {
        eventId: "4",
        cctv_name: "Record 4",
        address: "Description 4",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 4",
      },
    ],
  },
  {
    date: "2024-01-03",
    events: [
      {
        eventId: "5",
        cctv_name: "Record 5",
        address: "Description 5",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 5",
      },
    ],
  },
];

export { lives, records };
