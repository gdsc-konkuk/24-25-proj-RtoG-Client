export interface EventRecord {
  date: string;
  events: Event[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
}
