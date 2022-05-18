import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="addressType"
          label="AddressType"
          choices={[
            { label: "Invoice", value: "invoice" },
            { label: "Personal", value: "personal" },
            { label: "Other", value: "other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="HousNum" source="housNum" />
        <TextInput label="Region" source="region" />
        <TextInput label="StreetName" source="streetName" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
