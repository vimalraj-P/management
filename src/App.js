import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Price from './components/Price';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Hooks from './components/Hooks';
import Form from './components/Form';
import Student from './components/Student';
import { Toaster } from 'react-hot-toast';
import Studentdetails from './components/Studentdetails';
import { Provider } from './components/Context/Context';

function App() {
  const data = { name: "vimal", place: "chennai" }
  
  const toastoption={
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
      
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }
  return (
    <>
      <BrowserRouter>
      <Provider value={"vimal"}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home parentdata={data}></Home>} />
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}>
            <Route path='Profile' element={<Profile></Profile>} />
          </Route>
          <Route path='/Price' element={<Price></Price>} />
          {/* <Route path='/Contact' element={<Contact></Contact>} /> */}
          <Route path='/Hooks' element={<Hooks></Hooks>} />
          <Route path='/Form' element={<Form></Form>} />
          <Route path='/Student' element={<Student></Student>} />
          <Route path='/Student/details/:Studentid' element={<Studentdetails></Studentdetails>} />
        </Routes>
        </Provider>
        <Toaster position='bottom-center' toastOptions={toastoption}></Toaster>
      </BrowserRouter>




    </>
  );
}

export default App;
