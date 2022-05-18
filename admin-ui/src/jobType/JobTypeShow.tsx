import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { JOBTYPE_TITLE_FIELD } from "./JobTypeTitle";

export const JobTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="PricePerHour" source="pricePerHour" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="JobTypeId" label="Jobs">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="CurrentStatus" source="currentStatus" />
            <TextField label="description" source="description" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="EstimatedDuration" source="estimatedDuration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="JobType"
              source="jobtype.id"
              reference="JobType"
            >
              <TextField source={JOBTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="NumberOfHelper" source="numberOfHelper" />
            <TextField label="PaidAmount" source="paidAmount" />
            <TextField label="PricePerHour" source="pricePerHour" />
            <TextField label="StartDate" source="startDate" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
