export interface Device {
  id: string;
  name: string;
  ip: string;
  lastPing: string;
  status: "online" | "offline" | "warning";
}
