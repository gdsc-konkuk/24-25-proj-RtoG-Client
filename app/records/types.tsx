export interface DailyRecords {
  date: string;
  events: Record[];
}

export interface Record {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  timestamp: string;
}
