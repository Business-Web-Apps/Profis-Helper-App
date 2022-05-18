import { AddressUpdateManyWithoutUsersInput } from "./AddressUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  addresses?: AddressUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  gender?: "m" | "f" | "o" | null;
  lastName?: string | null;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
