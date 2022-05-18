import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Jobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
