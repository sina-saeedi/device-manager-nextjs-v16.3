"use server";
import {revalidatePath} from "next/cache";
import {createDevice} from "../api";
import {DeviceSchema, deviceSchema} from "../models/device";

export async function addDeviceAction(deviceInfo: DeviceSchema) {
  const data = await deviceSchema.parseAsync(deviceInfo);
  await createDevice(data);
  revalidatePath("/device");
}
