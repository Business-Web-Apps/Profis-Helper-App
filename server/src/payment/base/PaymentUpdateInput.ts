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
import { IsNumber, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumPaymentMethod } from "./EnumPaymentMethod";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class PaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

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
  job?: JobWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumPaymentMethod,
  })
  @IsEnum(EnumPaymentMethod)
  @IsOptional()
  @Field(() => EnumPaymentMethod, {
    nullable: true,
  })
  method?: "bankTransfer" | "creditCard" | "Paypal" | "other" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}
export { PaymentUpdateInput };
