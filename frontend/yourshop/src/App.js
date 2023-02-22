import Footer from './Components/Pages/HomePage/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './Components/Routes/AllRoutes';
import Navbar from './Components/Routes/Navbar';
import Header from './Components/Routes/Header';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
