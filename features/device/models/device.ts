import {z} from "zod";

export interface Device {
  id: string;
  name: string;
  ip: string;
  lastPing: string;
  status: "online" | "offline" | "warning";
}

export const deviceSchema = z.object({
  name: z.string().min(3, "نام دستگاه حداقل باید ۳ کاراکتر باشد"),
  ip: z.ipv4({error: "از ساختار آیپی درست و اعداد انگلیسی استفاده کنید"}),
  status: z.enum(["online", "offline", "warning"])
});

export type DeviceSchema = z.infer<typeof deviceSchema>;
