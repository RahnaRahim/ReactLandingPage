import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Cardss from './pages/Cardss';
function App() {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <Header/>
    <div className='container'>
      <Landing/>
      <Cardss/>
    </div>
     <Footer/></div>
    </>
  );
}

export default App;
