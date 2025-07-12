import { MANUFACTURER_TYPES } from "../../utils/constants";

export interface VehicleType {
  IsPrimary: boolean;
  Name: string;
}

export interface Manufacturer {
  Country: string;
  Mfr_CommonName: string | null;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleType[];
}

export interface ApiResponse {
  Count: number;
  Message: string;
  Results: Manufacturer[];
}

export type ManufacturerType = (typeof MANUFACTURER_TYPES)[number];