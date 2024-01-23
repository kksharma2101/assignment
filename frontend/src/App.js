import "./App.css";
import FormContainer from "./components/FormContainer";
import TableContainer from "./components/TableContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <FormContainer />
      <TableContainer />
      <Toaster />
    </div>
  );
}

export default App;
