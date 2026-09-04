import {sleep} from "#/lib/utils";
import {Device} from "../types";

const devices: Device[] = [
  {id: "1", name: "Core-Switch-01", ip: "192.168.1.1", status: "online", lastPing: "۲ دقیقه پیش"},
  {id: "2", name: "Edge-Router-02", ip: "192.168.1.2", status: "offline", lastPing: "۳ ساعت پیش"},
  {id: "3", name: "Access-Point-03", ip: "192.168.1.3", status: "online", lastPing: "چند روز پیش"},
  {id: "4", name: "Access-Point-04", ip: "192.168.1.4", status: "warning", lastPing: "۱ ماه پیش"}
];

export async function fetchDevices() {
  await sleep();
  return devices;
}

export async function addDevice(device: Device) {
  await sleep();
  devices.push(device);
  return device;
}

export async function deleteDevice(deviceId: Device["id"]) {
  await sleep();
  const index = devices.findIndex((device) => device.id !== deviceId);
  return devices.splice(index, 1);
}
