import { JobUpdateManyWithoutJobTypesInput } from "./JobUpdateManyWithoutJobTypesInput";

export type JobTypeUpdateInput = {
  description?: string;
  image?: string | null;
  jobs?: JobUpdateManyWithoutJobTypesInput;
  name?: "move" | "gardnening" | "furnitureAssemby";
  pricePerHour?: number;
};
