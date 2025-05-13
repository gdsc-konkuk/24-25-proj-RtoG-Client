import { DailyRecords } from "@/app/records/types";

const lives = [
  {
    streamId: "1",
    title: "Live 1",
    description: "Live stream 1 description",
    hasWildfireEvent: true,
  },
  {
    streamId: "2",
    title: "Live 2",
    description: "Live stream 2 description",
  },
  {
    streamId: "3",
    title: "Live 3",
    description: "Live stream 3 description",
    hasWildfireEvent: true,
  },
  {
    streamId: "4",
    title: "Live 4",
    description: "Live stream 4 description",
  },
  {
    streamId: "5",
    title: "Live 5",
    description: "Live stream 5 description",
  },
  {
    streamId: "6",
    title: "Live 6",
    description: "Live stream 6 description",
    hasWildfireEvent: true,
  },
  {
    streamId: "7",
    title: "Live 7",
    description: "Live stream 7 description",
  },
  {
    streamId: "8",
    title: "Live 8",
    description: "Live stream 8 description",
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
