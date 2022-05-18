import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { JobTypeList } from "./jobType/JobTypeList";
import { JobTypeCreate } from "./jobType/JobTypeCreate";
import { JobTypeEdit } from "./jobType/JobTypeEdit";
import { JobTypeShow } from "./jobType/JobTypeShow";
<<<<<<< HEAD
import { JobReportList } from "./jobReport/JobReportList";
import { JobReportCreate } from "./jobReport/JobReportCreate";
import { JobReportEdit } from "./jobReport/JobReportEdit";
import { JobReportShow } from "./jobReport/JobReportShow";
=======
>>>>>>> main
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProfisHelper"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="JobType"
          list={JobTypeList}
          edit={JobTypeEdit}
          create={JobTypeCreate}
          show={JobTypeShow}
        />
<<<<<<< HEAD
        <Resource
          name="JobReport"
          list={JobReportList}
          edit={JobReportEdit}
          create={JobReportCreate}
          show={JobReportShow}
        />
=======
>>>>>>> main
      </Admin>
    </div>
  );
};

export default App;
