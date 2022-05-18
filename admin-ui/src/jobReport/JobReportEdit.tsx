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
            { label: "Submitted", value: "submitted" },
            { label: "Accepted", value: "accepted" },
            { label: "Applyble", value: "applyble" },
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
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
