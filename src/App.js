import img from './College.png'
import './App.css';
import ComplaintForm from './Components/Emailform';

function App() {
  return (
    <div className="App">
      <ComplaintForm img={img}></ComplaintForm>
    </div>
  );
}

export default App;
