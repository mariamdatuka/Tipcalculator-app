import Calculation from './components/Calculation/Calculation';
import NumberPeople from './components/NumberPeople/NumberPeople';
import Search from './components/Search'
import Options from './components/TipOptions/Options';
import Logo from './images/logo.svg'
import {useState} from 'react';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';


function App() {
 const [bill, setBill]=useState('');
 const [person, setPerson]=useState('');
 const [tip, setTip]=useState('');
 const [error, setError]=useState(false);

 const reset=()=>{
      setBill('');
      setTip('');
      setPerson('');
}
  
  return (
    <>
    <img className='logo'src={Logo} alt='logo'/>
    <div className='main-container'>
      <Search bill={bill} setBill={setBill} />
      <Options tip={tip} setTip={setTip}/>
      <NumberPeople person={person} setPerson={setPerson} error={error} setError={setError}/>
      <Calculation bill={bill} tip={tip} person={person} reset={reset}/>
      </div>
    </>
  );
}

export default App;
