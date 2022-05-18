/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumJobCurrentStatus } from "./EnumJobCurrentStatus";
import {
  IsEnum,
  IsOptional,
  IsString,
  IsDate,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { JobReportUpdateManyWithoutJobsInput } from "./JobReportUpdateManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../../jobType/base/JobTypeWhereUniqueInput";
@InputType()
class JobUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumJobCurrentStatus,
  })
  @IsEnum(EnumJobCurrentStatus)
  @IsOptional()
  @Field(() => EnumJobCurrentStatus, {
    nullable: true,
  })
  currentStatus?:
    | "submitted"
    | "accepted"
    | "applyable"
    | "ready"
    | "inProgress"
    | "aborted"
    | "interrupted"
    | "done"
    | "cancelled";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedDuration?: number;

  @ApiProperty({
    required: false,
    type: () => JobReportUpdateManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => JobReportUpdateManyWithoutJobsInput)
  @IsOptional()
  @Field(() => JobReportUpdateManyWithoutJobsInput, {
    nullable: true,
  })
  jobReports?: JobReportUpdateManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => JobTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => JobTypeWhereUniqueInput, {
    nullable: true,
  })
  jobType?: JobTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberOfHelper?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  paidAmount?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pricePerHour?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}
export { JobUpdateInput };
