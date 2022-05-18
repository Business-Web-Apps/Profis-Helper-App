import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="HousNum" source="housNum" />
        <TextInput label="Region" source="region" />
        <TextInput label="StreetName" source="streetName" />
      </SimpleForm>
    </Edit>
  );
};
