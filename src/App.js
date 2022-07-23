import './App.scss';
import Resume from './Resume';
import data from './assets/data.json';

function App() {
    return (
        <div className="App">
            <Resume {...data}></Resume>
        </div>
    );
}

export default App;
