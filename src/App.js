import logo from './logo.svg';
import './App.css';
import Profilephoto from './components/Profile/profile';
import FullName from './components/Profile/fullname';
import Adrresse from './components/Profile/adress';
import profilephoto from './components/Profile/profile';

const App = () => (
  <>
  <div style={{backgroundColor: '#00BFB2', backgroundcolor:"red", border: "solid 1px black", maxwidth: "100vw"}}>

  <FullName />
     <Profilephoto/>
    <Adrresse/>


  </div>
    
   
    
  </>
 );
 export default App;
