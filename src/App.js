import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bank from './components/bank'
import MainScreen from './components/mainScreen';

function App() {
    return (
        <div className="App">
            <Bank/>
            {/*<MainScreen />*/}
        </div>
    );
}

export default App;
