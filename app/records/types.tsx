export interface DailyRecords {
  date: string;
  events: Record[];
}

export interface Record {
  eventId: string;
  cctv_name: string;
  address: string;
  thumbnail_url: string;
  timestamp: string;
}
