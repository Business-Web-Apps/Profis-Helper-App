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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumJobReportJobStatus } from "./EnumJobReportJobStatus";
@InputType()
class JobReportCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobWhereUniqueInput)
  @IsOptional()
  @Field(() => JobWhereUniqueInput, {
    nullable: true,
  })
  job?: JobWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    enum: EnumJobReportJobStatus,
  })
  @IsEnum(EnumJobReportJobStatus)
  @Field(() => EnumJobReportJobStatus)
  jobStatus!:
    | "submitted"
    | "accepted"
    | "applyble"
    | "ready"
    | "inProgress"
    | "aborted"
    | "interrupted"
    | "done"
    | "cancelled";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { JobReportCreateInput };
