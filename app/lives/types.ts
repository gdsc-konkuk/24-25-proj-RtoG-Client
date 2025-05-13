interface Live {
  id: string;
  name: string;
  address: string;
  status?: "hazardous" | "normal" | "danger";
}

export type { Live };
