import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobTitle } from "../job/JobTitle";

export const JobReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <SelectInput
          source="jobStatus"
          label="JobStatus"
          choices={[
            { label: "Submitted", value: "Submitted" },
            { label: "Accepted", value: "Accepted" },
            { label: "Applyable", value: "Applyable" },
            { label: "Ready", value: "Ready" },
            { label: "In Progress", value: "InProgress" },
            { label: "Aborted", value: "Aborted" },
            { label: "Interrupted", value: "Interrupted" },
            { label: "Done", value: "Done" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
