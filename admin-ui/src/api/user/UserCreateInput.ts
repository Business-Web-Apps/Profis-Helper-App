import { AddressCreateNestedManyWithoutUsersInput } from "./AddressCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  addresses?: AddressCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  lastName?: string | null;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
