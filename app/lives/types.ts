export interface LiveStream {
  id: string;
  title?: string;
  status: "active" | "inactive" | "error";
  lastUpdated?: Date;
}

export interface LiveThumbnailProps {
  streamId: string;
  label?: string;
}

export interface LiveGridProps {
  streams: LiveStream[];
}
