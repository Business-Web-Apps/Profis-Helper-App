import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="CurrentStatus" source="currentStatus" />
        <TextField label="description" source="description" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="EstimatedDuration" source="estimatedDuration" />
        <TextField label="ID" source="id" />
        <TextField label="JobType" source="jobType" />
        <TextField label="NumberOfHelper" source="numberOfHelper" />
        <TextField label="PaidAmount" source="paidAmount" />
        <TextField label="PricePerHour" source="pricePerHour" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
