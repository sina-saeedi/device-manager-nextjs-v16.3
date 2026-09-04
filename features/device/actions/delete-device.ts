"use server";
import {revalidatePath} from "next/cache";
import {deleteDevice} from "../api";
import {type Device} from "../models/device";

export async function deleteDeviceAction(deviceId: Device["id"]) {
  await deleteDevice(deviceId);
  revalidatePath("/device");
}
