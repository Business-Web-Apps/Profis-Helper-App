import { JobCreateNestedManyWithoutJobTypesInput } from "./JobCreateNestedManyWithoutJobTypesInput";

export type JobTypeCreateInput = {
  description: string;
  image?: string | null;
  jobs?: JobCreateNestedManyWithoutJobTypesInput;
  name: "Move" | "Gardnening" | "FurnitureAssemby" | "Other";
  pricePerHour: number;
};
