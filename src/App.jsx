import Form from "./Components/Form";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <Form />
    </div>
  );
}

export default App