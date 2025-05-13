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

type DailyRecord = {
  date: string;
  events: Record[];
};

type Record = {
  eventId: string;
  cctv_name: string;
  address: string;
  thumbnail_url: string;
  timestamp: string;
};

const records: DailyRecord[] = [
  {
    date: "2024-01-01",
    events: [
      {
        eventId: "1",
        cctv_name: "Record 1",
        address: "Description 1",
        thumbnail_url: "Description 1",
        timestamp: "Description 1",
      },
      {
        eventId: "2",
        cctv_name: "Record 2",
        address: "Description 2",
        thumbnail_url: "Description 2",
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
        thumbnail_url: "Description 3",
        timestamp: "Description 3",
      },
      {
        eventId: "4",
        cctv_name: "Record 4",
        address: "Description 4",
        thumbnail_url: "Description 4",
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
        thumbnail_url: "Description 5",
        timestamp: "Description 5",
      },
    ],
  },
];

export { lives, records, type Record, type DailyRecord };
