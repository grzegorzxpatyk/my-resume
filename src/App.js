import './App.scss';
import Resume from './Resume';

const data = {
    bio: {
        firstName: 'Grzegorz',
        lastName: 'Patyk',
        title: 'Frontend Developer',
        email: 'grzegorzxpatyk@gmail.com',
        phoneNumber: '(+48) 662 444 438',
        about: 'Creative Front End Developer taking first steps in software development industry. Trained architect, self-taught software developer. Wishing to bring my problem solving and analytical thinking skills from architecture into web development business. Passionate about design, architecture, snowboarding and dogs 🐶',
    },
    experience: [
        {
            position: 'Junior Frontend developer',
            duration: 'Jun 2022 - Present',
            company: 'Transition Technologies MS',
            location: 'Cracow/Remote',
            description:
                'Development of frontend layer in web applications, using <strong>JavaScript / TypeScript</strong>, <strong>React</strong>, <strong>Redux</strong>, & <strong>CSS / SASS</strong>. Effective implementation of User Interfaces using <strong>react-bootstrap</strong> UI library.',
        },
        {
            position: 'Junior Frontend developer',
            duration: 'Jan 2022 - May 2022',
            company: 'ALTEN',
            location: 'Cracow',
            description:
                'Development of the internal applications using <strong>PHP, jQuery, JavaScript and SASS</strong>. Implementation of client-side form validation, with the use of <strong>js and regular expressions</strong>. Testing API with <strong>Swagger</strong> and <strong>Postman</strong>.',
        },
        {
            position: 'Frontend development intern',
            duration: 'Jun 2021 - Dec 2021',
            company: 'Beeanco',
            location: 'Remote',
            description:
                'Implementation of new <strong>Svelte</strong> components of the web application, improvement of existing components. Standardization of the output to a <strong>responsive, mobile-first</strong> approach using <strong>SASS</strong>. Working on the verge of back-end and front-end with <strong>WordPress as headless CMS</strong>. Effective translation of UI designs to code implementations.',
        },
        {
            position: 'Freelance web developer',
            duration: 'Feb 2020 - Present',
            company: 'Freelance',
            location: 'Remote',
            description:
                'Handling all verbal and written communications with clients and hosting companies. Meeting with clients to review website designs and gather their feedback. Design, build and maintenance of new responsive websites using <strong>Wordpress</strong>, <strong>JavaScript</strong>, <strong>SASS</strong>(with <strong>SCSS</strong> syntax) and <strong>HTML</strong>.',
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
            level: '5',
        },
        {
            name: 'React',
            level: '3',
        },
        {
            name: 'Svelte',
            level: '3',
        },
        {
            name: 'CSS',
            level: '5',
        },
        {
            name: 'HTML',
            level: '5',
        },
        {
            name: 'Git',
            level: '4',
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
