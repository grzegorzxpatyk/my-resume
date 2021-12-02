import './App.scss';
import Resume from './Resume';

const data = {
    bio: {
        firstName: 'Grzegorz',
        lastName: 'Patyk',
        email: 'grzegorzxpatyk@gmail.com',
        phoneNumber: '(+48) 662 444 438',
        about: 'Creative Front End Developer taking first steps in software development industry. Trained architect, self-taught software developer. Wishing to bring my problem solving and analytical thinking skills from architecture into web development business. Passionate about dogs, visual arts and sustainable architecture.',
    },
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Resume {...data}></Resume>
            </header>
        </div>
    );
}

export default App;
