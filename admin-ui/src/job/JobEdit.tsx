import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
<<<<<<< HEAD
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { JobReportTitle } from "../jobReport/JobReportTitle";
import { JobTypeTitle } from "../jobType/JobTypeTitle";

=======
} from "react-admin";

>>>>>>> main
export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
<<<<<<< HEAD
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
=======
        <SelectInput
          source="jobType"
          label="JobType"
          choices={[
            { label: "Move", value: "move" },
            { label: "Gardening", value: "gardening" },
            { label: "Furniture Assembly", value: "furnitureAssembly" },
          ]}
          optionText="label"
          optionValue="value"
        />
>>>>>>> main
        <NumberInput label="NumberOfHelper" source="numberOfHelper" />
        <NumberInput label="PaidAmount" source="paidAmount" />
        <NumberInput label="PricePerHour" source="pricePerHour" />
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Title" multiline source="title" />
      </SimpleForm>
    </Edit>
  );
};
