/**
 * Faked backend API requests
 */
import {sleep} from "#/lib/utils";
import {Device} from "../models/device";

const devices: Device[] = [
  {id: "1", name: "Core-Switch-01", ip: "192.168.1.1", status: "online", lastPing: "۲ دقیقه پیش"},
  {id: "2", name: "Edge-Router-02", ip: "192.168.1.2", status: "offline", lastPing: "۳ ساعت پیش"},
  {id: "3", name: "Access-Point-03", ip: "192.168.1.3", status: "online", lastPing: "چند روز پیش"},
  {id: "4", name: "Access-Point-04", ip: "192.168.1.4", status: "warning", lastPing: "۱ ماه پیش"}
];

type FetchDevicesParams = {
  q?: string;
  status?: Device["status"][];
};

export async function fetchDevices({status = [], q = ""}: FetchDevicesParams) {
  await sleep();
  const query = q.trim().toLowerCase();

  return devices.filter((device) => {
    const statusMatches = status.length === 0 || status.includes(device.status);
    const nameMatches = query === "" || device.name.trim().toLowerCase().includes(query);
    return statusMatches && nameMatches;
  });
}

export async function createDevice(device: Omit<Device, "lastPing" | "id">) {
  await sleep();
  devices.unshift({
    ...device,
    id: Math.floor(Math.random() * 100000).toString(),
    lastPing: `${Math.floor(Math.random() * 100)} دقیقه پیش`
  });
  return device;
}

export async function deleteDevice(deviceId: Device["id"]) {
  await sleep();
  if (devices.length === 1) throw Error("Can't delete all devices there must be at least one device left");
  const index = devices.findIndex((device) => device.id === deviceId);
  return devices.splice(index, 1);
}
