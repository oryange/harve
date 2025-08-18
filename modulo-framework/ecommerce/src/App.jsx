import './App.css'
import RouterApp from './routes/index'
import CustomNavBar from './components/CustomNavBar'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ContextCartProvider from './hooks/ContextCart';

function App() {

  return (
    <>
      <ContextCartProvider>
        <ToastContainer />
        <CustomNavBar />
        <RouterApp />
      </ContextCartProvider>
    </>
  )
}

export default App
