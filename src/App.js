import './App.scss';
import Resume from './Resume';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Resume
                    firstName="Grzegorz"
                    lastName="Patyk"
                    email="grzegorzxpatyk@gmail.com"
                    phoneNumber="(+48) 662 444 438"
                ></Resume>
            </header>
        </div>
    );
}

export default App;
