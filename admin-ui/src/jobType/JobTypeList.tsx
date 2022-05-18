import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"JobTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
<<<<<<< HEAD
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="PricePerHour" source="pricePerHour" />
=======
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
>>>>>>> main
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
