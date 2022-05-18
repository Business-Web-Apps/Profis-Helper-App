import * as React from "react";
<<<<<<< HEAD

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";
=======
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";
>>>>>>> main

export const JobTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
<<<<<<< HEAD
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
=======
        <TextInput label="Name" source="name" />
>>>>>>> main
      </SimpleForm>
    </Create>
  );
};
