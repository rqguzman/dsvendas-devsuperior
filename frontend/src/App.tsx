import DataTable from "components/DataTable/DataTable";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hello world!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
