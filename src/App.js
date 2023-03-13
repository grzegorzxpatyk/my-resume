import './App.scss';
import Resume from './Resume';
import data from './assets/data.json';
import Button from './Button';

function App() {
    return (
        <div className="App">
            <Resume {...data}></Resume>
            <Button
                onClick={() => window.print()}
                css={{ position: 'fixed', bottom: '3vh', right: '3vw' }}
            >
                Print
            </Button>
        </div>
    );
}

export default App;
