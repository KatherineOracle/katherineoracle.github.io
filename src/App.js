import "./assets/scss/App.scss";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Tools from "./Tools";
import Jobs from "./Jobs";
import Portfolio from "./Portfolio";
import Learning from "./Learning";
import Footer from "./Footer";

function App() {

/*
Below all the app data (about me)
*/
  const person = {
    name: "Katherine Van As",
    photo: "assets/img/me.jpg",
    expertise: ["Design", "UX", "Code"],
    telephone: "+27 73 216 5889",
    location: "Johannesburg, South Africa",
    social: [
      {
        type: "Email",
        link: "mailto:vanas.katherine@gmail.com",
      },
      {
        type: "LinkedIn",
        link: "https://www.linkedin.com/in/katherinesteel/",
      },
      {
        type: "Github",
        link: "https://github.com/KatherineOracle",
      },
      {
        type: "Heroku",
        link: "https://vanaskatherine.herokuapp.com",
      },      
      {
        type: "Instagram",
        link: "https://www.instagram.com/discomiracle/",
      },
      {
        type: "Facebook",
        link: "https://www.facebook.com/discomiracle",
      },
    ],
    introduction: <>
      <p>Hi, I'm Katherine.</p>
      <p>I've recently completed my software engineer/full stack developer bootcamp with HyperionDev SA.</p>
      <p>I'm always on the look out for amazing learning experiences and iengaging work opportunities.</p>
      </>,
    skills: {
      mad: [
        { name: "HTML5", icon: "assets/img/icon-html5.png", rank: 5 },
        { name: "CSS3", icon: "assets/img/icon-css3.png", rank: 5 },
        { name: "JQuery", icon: "assets/img/icon-jquery.png", rank: 5 },
        { name: "PHP", icon: "assets/img/icon-php.png", rank: 5 },
        { name: "ECMAscript 6", icon: "assets/img/icon-es6.png", rank: 5 },
        { name: "React", icon: "assets/img/icon-react.png", rank: 4 },
        { name: "NodeJS", icon: "assets/img/icon-nodejs.png", rank: 4 },
        { name: "Java", icon: "assets/img/icon-java.png", rank: 4 },
        { name: "MongoDB", icon: "assets/img/icon-mongodb.png", rank: 4 },
        { name: "SQL server", icon: "assets/img/icon-sqlserver.png", rank: 4},
        { name: "MySQL", icon: "assets/img/icon-mysql.png", rank: 4 },
      ],
      loading: [        
        { name: "Python", icon: "assets/img/icon-python.png", rank: 0 },  
        { name: "AWS", icon: "assets/img/icon-aws.png", rank: 0 }, 
        { name: "GoLang", icon: "assets/img/icon-golang.png", rank: 0 },    
        { name: "Ruby", icon: "assets/img/icon-ruby.png", rank: 2 },
        { name: "Angular", icon: "assets/img/icon-angular.png", rank: 1 },                
      ],
    },
    "tools": [
      {
        Software: [
          "VS Code",
          "Photoshop",
          "Illustrator",
          "Git",
          "NPM",
          "Windows",
          "MS Office",
        ],
      },
      {
        Frameworks: [
          "Foundation 6",
          "Bootstrap 5",
          "UIkit",
          "CodeIgniter",
          "Laravel",
          "Wordpress",
          "Joomla",
        ],
      },
      {
        "Online resources": [
          "Github",
          "Heroku",
          "Fontello",
          "Flaticon",
          "Google APIs",
          "Facebook API",
          "Yahoo Finance API",
        ],
      },
    ],
    jobs: [
      {
        name: "R&A Strategic Communications",
        icon: "assets/img/logo-rasc.png",
        year: "2006 &#8211; present",
      },
      {
        name: "Ince",
        icon: "assets/img/logo-ince.png",
        year: "2005 &#8211; 2006",
      },
      {
        name: "Aspiration Software",
        icon: "assets/img/logo-aspiration.png",
        year: "2002 &#8211; 2004",
      },
    ],
    learning: [
      {
        name: "HyperionDev",
        icon: "assets/img/logo-hyperiondev.png",
        courses: "Fullstack web development",
        year: "2021-2022",
      },
      {
        name: "Udemy",
        icon: "assets/img/logo-udemy.png",
        courses: "React, Angular, WordPress, Ruby",
        year: "2019 &#8211; 2021",
      },
      {
        name: "VZap",
        icon: "assets/img/logo-vzap.png",
        courses: "Web development",
        year: "2002",
      },
      {
        name: "UJ",
        icon: "assets/img/logo-uj.png",
        courses: "Btech Graphic design ",
        year: "1997 &#8211; 2000",
      },
      {
        name: "St Dominics",
        icon: "assets/img/logo-stdominics.png",
        courses: "High school",
        year: "1993 &#8211; 1996",
      },
    ],
    portfolio: {
      student: [
      {
        name: "CoolTechVault",
        thumbnail: "assets/img/portfolio/student/cooltechvault.jpg",
        description: "An authenticated credentials library",
        github_url: "https://github.com/KatherineOracle/cooltechvault",
        heroku_url: "https://cooltechvault.herokuapp.com/",
        languages: ["React", "JavaScript","NodeJs", "Express", "MongoDB", "Mongoose", "JWT", "BCrypt"]
      },
      {
        name: "GitSeeker",
        thumbnail: "assets/img/portfolio/student/gitseeker.jpg",
        description: "Finds users on both GitHub and GitLab",
        github_url: "https://github.com/KatherineOracle/gitSeeker",
        heroku_url: "https://thegitseeker.herokuapp.com/",
        languages: ["React", "JavaScript", "NodeJs", "Express"],
      },
      {
        name: "MyTinyTaskManager",
        thumbnail: "assets/img/portfolio/student/tinytaskmanager-react-app.jpg",
        description: "A MERN stack to-do list ",
        github_url: "https://github.com/KatherineOracle/MyTinyTaskManager",
        heroku_url: "https://mytinytaskmanager.herokuapp.com/",
        languages: ["React", "JavaScript", "NodeJs", "Express", "MongoDB", "Mongoose"]
      },  
      {
        name: "VroomVroomCarFind",
        thumbnail: "assets/img/portfolio/student/vroomvroom-carfind-app.jpg",
        description: "A react/express app implementing CRUD API methods on a tesxt file",
        github_url: "https://github.com/KatherineOracle/VroomVroomCarFind",
        heroku_url: "https://vroomvroom-carfind.herokuapp.com/",
        languages: ["React", "JavaScript", "NodeJs", "Express"]
      },       
      {
        name: "MontyHall",
        thumbnail: "assets/img/portfolio/student/montyhall-app.jpg",
        description: "A fun game of chance and probability",
        github_url: "https://github.com/KatherineOracle/MontyHall",
        heroku_url: "https://mymontyhallgame.herokuapp.com/",
        languages: ["React", "Javascript"]
      },         
      {
        name: "CoolTechLaravel",
        thumbnail: "assets/img/portfolio/student/cooltech-laravel-news-website.jpg",
        description: "A simple news publishing website built with Laravel and the Breeze starter kit",
        github_url: "https://github.com/KatherineOracle/CoolTechLaravel",
        languages: ["PHP", "Laravel", "MS SQLServer"]
      }, 
      {
        name: "Cooltech Wordpress",
        thumbnail: "assets/img/portfolio/student/cooltech-wordpress-site.png",
        description: "A Block-based theme and custom wordpress plugins for image replacement and hit counting",
        github_url: "https://github.com/KatherineOracle/dailycupcake",
        languages: ["PHP", "Wordpress", "MySQL"]
      },        
      {
        name: "Hangman",
        thumbnail: "assets/img/portfolio/student/hangman.png",
        description: "Everyone's favourite word-guessing game in React",
        github_url: "https://github.com/KatherineOracle/hangMan",
        heroku_url: "https://kv21040002036-hangman.herokuapp.com/",
        languages: ["React", "Javascript"]
      },  
      {
        name: "QuickFood MS",
        thumbnail: "assets/img/portfolio/student/quickfood-ms.png",
        description: "A mock desktop food ordering app",
        github_url: "https://github.com/KatherineOracle/QuickFoodMS",
        languages: ["Java", "JavaFX", "MS SQLServer"]
      },  
      {
        name: "Daily Cupcake",
        thumbnail: "assets/img/portfolio/student/dailycupcake.webp",
        description: "Cupcake shop concept design site",
        github_url: "https://github.com/KatherineOracle/dailycupcake",
        languages: ["HTML", "SCSS", "Javascript", "Jquery"]
      },        
      {
        name: "Caesar Cypher",
        thumbnail: "assets/img/portfolio/student/longcaesarblogimage.webp",
        description: "Encoding and decoding with arrays, functions and string handling",
        github_url: "https://github.com/KatherineOracle/caesarcypher",
        languages: ["Javascript"]
      }  
    ]                                  
    , professional: [
      {
        name: "Anglogold Ashanti - Corporate site",
        thumbnail: "assets/img/portfolio/professional/screenshot-anglogold-ashanti.jpg",
        live_url: "https://www.anglogoldashanti.com/",
        languages: ["PHP", "WordPress", "Zurb Foundation", "JQuery", "Sass"]
      },
      {
        name: "Detpak SA - Corporate and Ecommerce website",
        thumbnail: "assets/img/portfolio/professional/screenshot-detpak-sa.jpg",
        live_url: "https://detpak.co.za/",
        languages: ["PHP", "Joomla", "Bootstrap", "JQuery", "Sass", "Payfast"]
      },
      {
        name: "EastPlats Limited - corporate website",
        thumbnail: "assets/img/portfolio/professional/screenshot-eastplats.jpg",
        live_url: "https://eastplats.com/",
        languages: ["PHP", "WordPress", "Javascript", "Sass", "RapidAPI"]
      },
      {
        name: "Institute for Social Dialogue - non-profit website",
        thumbnail: "assets/img/portfolio/professional/screenshot-isd.jpg",
        live_url: "https://isd.org.za/",
        languages: ["PHP", "WordPress", "Javascript", "Sass"]
      },
      {
        name: "Sibanye-Stillwater - 2022 Annual Report Microsite",
        thumbnail: "assets/img/portfolio/professional/ssw-integrated-reporting-suite-2021.jpg",
        live_url: "https://reports.sibanyestillwater.com/",
        languages: ["Zurb Foundation", "JQuery", "Sass"]
      },
      {
        name: "AngloGold Ashanti - 2022 Annual Report Suite Microsite",
        thumbnail: "assets/img/portfolio/professional/screenshot-aga-r2021.jpg",
        live_url: "https://www.aga-reports.com/",
        languages: ["PHP", "WordPress", "Javascript", "Sass"]
      },
      {
        name: "Marikana Renewal - non-profit website",
        thumbnail: "assets/img/portfolio/professional/screenshot-marikana-renewal.jpg",
        live_url: "https://www.marikanarenewal.co.za/",
        languages: ["PHP", "WordPress", "Javascript", "Sass"]
      },
      {
        name: "MOSH Critical Noise Equipment Screening Tool",
        thumbnail: "assets/img/portfolio/professional/screenshot-MOSH-critical-noise-tool.jpg",
        live_url: "https://www.mosh.co.za/tools/noise/screening/",
        languages: ["PHP", "CodeIgniter", "Jquery", "MySQL"]
      }        
    ]
    }
  };

  /*
  Put all the sections of the page together, 
  passing person data as props to the various components 
  */
  return (
    <div className="App">
      <Header
        social={person.social}
        name={person.name}
        expertise={person.expertise}
        photo={person.photo}
      />
      <main>
        <Intro introduction={person.introduction} />
        <Skills skills={person.skills} />
        <Tools using={person.tools} />
        <Jobs jobs={person.jobs} />
        <Learning learning={person.learning} />
        <Portfolio portfolio={person.portfolio} />
      </main>
      <Footer
        name={person.name}
        expertise={person.expertise}
        telephone={person.telephone}
        location={person.location}
        email={person.social[0].link}
      />
    </div>
  );
}

export default App;
