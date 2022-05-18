import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobTitle } from "../job/JobTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <SelectInput
          source="method"
          label="Method"
          choices={[
            { label: "Bank Transfer", value: "bankTransfer" },
            { label: "Credit Card", value: "creditCard" },
            { label: "Paypal", value: "Paypal" },
            { label: "Other", value: "other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
