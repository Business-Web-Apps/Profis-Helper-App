import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { JobReportTitle } from "../jobReport/JobReportTitle";
import { JobTypeTitle } from "../jobType/JobTypeTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="currentStatus"
          label="CurrentStatus"
          choices={[
            { label: "Submitted", value: "submitted" },
            { label: "Accepted", value: "accepted" },
            { label: "Applyable", value: "applyable" },
            { label: "Ready", value: "ready" },
            { label: "In Progress", value: "inProgress" },
            { label: "Aborted", value: "aborted" },
            { label: "Interrupted", value: "interrupted" },
            { label: "Done", value: "done" },
            { label: "Cancelled", value: "cancelled" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <NumberInput label="EstimatedDuration" source="estimatedDuration" />
        <ReferenceArrayInput
          source="jobReports"
          reference="JobReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobReportTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="jobtype.id" reference="JobType" label="JobType">
          <SelectInput optionText={JobTypeTitle} />
        </ReferenceInput>
        <NumberInput label="NumberOfHelper" source="numberOfHelper" />
        <NumberInput label="PaidAmount" source="paidAmount" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <NumberInput label="PricePerHour" source="pricePerHour" />
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Title" multiline source="title" />
      </SimpleForm>
    </Create>
  );
};
