<<<<<<< HEAD
import { JobCreateNestedManyWithoutJobTypesInput } from "./JobCreateNestedManyWithoutJobTypesInput";

export type JobTypeCreateInput = {
  description: string;
  image?: string | null;
  jobs?: JobCreateNestedManyWithoutJobTypesInput;
  name: "move" | "gardnening" | "furnitureAssemby";
  pricePerHour: number;
=======
export type JobTypeCreateInput = {
  name: string;
>>>>>>> main
};
