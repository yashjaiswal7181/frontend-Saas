import "./App.css";
import Header from "./common/components/Header/Header";
import { useEffect, useState } from "react";
import Loader from "./common/components/Loader/Loader";
import Divider from "./common/components/Divider/Divider";
import DataTable from "./views/TableView/DataTable";

function App() {
  const [loader, showLoader] = useState(true);
  useEffect(() => {
    // we can replace the dummy setTimeout with any config / setup API call
    setTimeout(() => {
      showLoader(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loader && <Loader />}
      <Header />
      <Divider text="SaaS Data Table" />
      <DataTable />
    </div>
  );
}

export default App;
