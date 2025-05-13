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
        id: "1",
        title: "Record 1",
        description: "Description 1",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 1",
      },
      {
        id: "2",
        title: "Record 2",
        description: "Description 2",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 2",
      },
    ],
  },
  {
    date: "2024-01-02",
    events: [
      {
        id: "3",
        title: "Record 3",
        description: "Description 3",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 3",
      },
      {
        id: "4",
        title: "Record 4",
        description: "Description 4",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 4",
      },
    ],
  },
  {
    date: "2024-01-03",
    events: [
      {
        id: "5",
        title: "Record 5",
        description: "Description 5",
        thumbnail_url: "/url/test/thumbnail.jpg",
        timestamp: "Description 5",
      },
    ],
  },
];

export { lives, records };
