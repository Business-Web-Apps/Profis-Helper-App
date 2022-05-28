import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
