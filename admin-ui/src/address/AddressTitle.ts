import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "streetName";

export const AddressTitle = (record: TAddress): string => {
  return record.streetName || record.id;
};
