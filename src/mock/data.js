import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hussein Fawaz', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hussein B. Fawaz',
  subtitle: 'A Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Full stack web developer working with frontend technologies like HTML5-CSS3-Js and some javascript library like ReactJs , JQuery and backend technologies like PHP and ASP.NET core with some database like MySql and MongoDB',
  paragraphTwo:
    'I am also working with mobile development such as native android development using Java and cross platform mobile applications using flutter',
  paragraphThree: 'Also working with desktop application development with java swing and javafx',
  resume: 'https://www.keepandshare.com/doc29/112509/my-resume-pdf-46k?da=y', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'LFA-Grassroots.PNG',
    title: 'LFA Grassroots Mobile Application',
    info:
      'This project is implemented using flutter technologie with mysql backend. Consist as an admin page (web page) to upload all data required to the grassroot football league (annoncment , matches , results , ranking,ect..) , and mobile application that work on both android and ios devices for the  users to see these data.',
    info2: '',
    url: '',
    repo: 'https://github.com/hbfawaz112/LFA-Grassroots', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'realchat.png',
    title: 'Realtime chat application',
    info:
      'A RealTime chat application developped using PHP with MySql for the backend and HTML5-CSS3-JS for the frontend with AJAX technology. This webapp contain authentication (login /signup) , a list of user with an icon represent the status of a user (online/offline) with a search form for a specific user and the chat page between 2 users in realtime.',
    info2: '',
    url: '',
    repo: 'https://github.com/hbfawaz112/Realtime-Chat-Application', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter-monogoDB.png',
    title: 'Twitter Clone',
    info:
      'A social media site like twitter to post , follow , like , comment , etc.. Developed using PHP and MongoDB',
    info2: '',
    url: '',
    repo: 'https://github.com/hbfawaz112/Twitter-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moodle.png',
    title: 'Moodle ULFS',
    info:
      'This is a web project developed using php-mysql , it’s about 2 website one for the instructors to upload files as pdf courses, sessions, … , and one for the students that can acces to their account and download these files.',
    info2: '',
    url: '',
    repo: 'https://github.com/hbfawaz112/moodle-UL-Faculity-Of-Science', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FORM-OF-DISCUSION.png',
    title: 'UL-FS Form Of Discussion',
    info:
      'A website developed using ASP.NET MVC to let students communicate between them by asking public questions or private questions based on many factors , and reply to these questions',
    info2: '',
    url: '',
    repo: 'https://github.com/hbfawaz112/UL-FS-Form-of-Discussion-ASP.NET-MVC', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'football-managment-systems.png',
    title: 'Football Academies Managment System',
    info:
      'A Desktop app developed with java (GUI-swing) for managing data of a football academy (Players , Coaches , Training and the academy balance)',
    info2: '',
    url: '',
    repo: 'https://github.com/hbfawaz112/Football-Academies-Management-Systeme', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hbfawaz112@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hussfwz',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100011177776172',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hussein-b-fawaz-21a778140/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hbfawaz112',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
