//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light'); 
  const [alert,setAlert]=useState(null);
  const showAlert= (message, type)=>
    {
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500);
   
    }
  const toggleMode = ()=>{
    if(mode==='light')
      {
    setMode('dark');
    document.body.style.backgroundColor='blue';
    showAlert("Dark mode annable","success");
    document.title="TextUtils-Dark mode";
   // setInterval(()=>
      //{
        //document.title="TextUtlis is Amazing";

    //  },2000);
     // setInterval(()=>
      //  {
//document.title="Install TextUtils Now";
      // },1500);
      }
  else
  {
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode enable ","success");
  document.title="TextUtils-light mode enable";
  }
  }
  return (
    
 <>
 <Router>
<Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
<Alert  alert={alert}/>
<div className='container my-3'>
<Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to anlyze below" />

          </Route>
        </Switch>
        

</div>
</Router>

    </>
  );
}
export default App;
