interface Live {
  id: string;
  name: string;
  address: string;
  event_type?: "hazardous" | "normal" | "danger";
}

interface DetailedLive extends Live {
  eventId: string;
  video_id: string;
  cctv_name: string;
  address: string;
  timestamp: string;
  description: string;
}

export type { Live, DetailedLive };
