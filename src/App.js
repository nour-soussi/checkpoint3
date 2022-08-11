import './App.css';
import Header from'./compnents/navbar.js'
import Reserver from'./compnents/reservation.js'
import ControllerCarousel from'./compnents/slider.js'
import FooterController from'./compnents/footer.js'
function App() {
    return ( 
        <div>
            <Header/>
            <ControllerCarousel/>
            <Reserver/>
            <br></br>
            <FooterController/>
        </div>
    );
} ;
export default App;
