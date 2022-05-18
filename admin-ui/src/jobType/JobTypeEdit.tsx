import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";

export const JobTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="name"
          label="Name"
          choices={[
            { label: "Move", value: "move" },
            { label: "Gardnening", value: "gardnening" },
            { label: "Furniture Assemby", value: "furnitureAssemby" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="PricePerHour" source="pricePerHour" />
      </SimpleForm>
    </Edit>
  );
};
