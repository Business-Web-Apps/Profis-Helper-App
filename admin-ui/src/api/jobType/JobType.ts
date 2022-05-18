<<<<<<< HEAD
import { Job } from "../job/Job";

export type JobType = {
  createdAt: Date;
  description: string;
  id: string;
  image: string | null;
  jobs?: Array<Job>;
  name?: "move" | "gardnening" | "furnitureAssemby";
  pricePerHour: number;
=======
export type JobType = {
  createdAt: Date;
  id: string;
  name: string;
>>>>>>> main
  updatedAt: Date;
};
