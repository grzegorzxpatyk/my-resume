import './App.scss';
import Resume from './Resume';

const data = {
    bio: {
        firstName: 'Grzegorz',
        lastName: 'Patyk',
        email: 'grzegorzxpatyk@gmail.com',
        phoneNumber: '(+48) 662 444 438',
        about: 'Creative Front End Developer taking first steps in software development industry. Trained architect, self-taught software developer. Wishing to bring my problem solving and analytical thinking skills from architecture into web development business.',
    },
    experience: [
        {
            position: 'Frontend development intern',
            duration: 'Jun 2021 - Present',
            company: 'Beeanco',
            location: 'Remote',
            description:
                'Implementation of new <em>Svelte</em> components of the web application, improvement of existing components. Standardization of the output to a <em>responsive, mobile-first</em> approach using <em>SASS</em>. Working on the verge of back-end and front-end using <em>WordPress</em>. Effective translation of UI designs to code implementations.',
        },
        {
            position: 'Freelance web developer',
            duration: 'Feb 2021 - Present',
            company: 'Freelance',
            location: 'Remote',
            description:
                'Handling all verbal and written communications with clients and hosting companies. Meeting with clients to review website designs and gather their feedback. Design, build and maintenance of new responsive websites using <em>Wordpress</em>, <em>JavaScript</em>, <em>SASS</em>(with <em>SCSS</em> syntax) and <em>HTML</em>.',
        },
        {
            position: 'Junior Architect',
            duration: 'Jul 2020 - Feb 2021',
            company: 'K3 Architektci',
            location: 'Cracow',
            description:
                'Preparation of architectural designs for residential, commercial and public objects using <em>Blender</em> and <em>Adobe Photoshop</em>. Creating visualizations and animations for competition designs. Taking part in meetings with clients.',
        },
    ],
    education: [
        {
            name: 'Cracow University of Technology',
            degree: 'MSc in Architecture and Urban Planning',
            duration: 'Feb 2019 - Sep 2020',
            location: 'Cracow',
        },
        {
            name: 'Lublin University of Technology',
            degree: 'BSc in Architecture and Urban Planning',
            duration: 'Oct 2015 - Jan 2019',
            location: 'Lublin',
        },
    ],
    skills: [
        {
            name: 'JavaScript',
            level: '4',
        },
        {
            name: 'HTML',
            level: '5',
        },
        {
            name: 'CSS',
            level: '5',
        },
        {
            name: 'Svelte',
            level: '3',
        },
        {
            name: 'React',
            level: '3',
        },
    ],
    interests: ['Design', 'Architecture', 'Snowboarding', 'Dogs🐶'],
};

function App() {
    return (
        <div className="App">
            <Resume {...data}></Resume>
        </div>
    );
}

export default App;
