import { StringFilter } from "../../util/StringFilter";
<<<<<<< HEAD
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type JobTypeWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  jobs?: JobListRelationFilter;
  name?: "move" | "gardnening" | "furnitureAssemby";
  pricePerHour?: FloatFilter;
=======

export type JobTypeWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
>>>>>>> main
};
