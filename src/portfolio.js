/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ting Zhang",
  title: "Hi all, I'm Ting",
  title2: "Stay curious and keep learning forever",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1FRJ7B2-wy4l5BDORY2TlnRV-7QzaJ175/edit?usp=sharing&ouid=104897058406563715541&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tinazhang616",
  linkedin: "https://www.linkedin.com/in/tina-ting-zhang/",
  gmail: "tinazhang616@gmail.com",
  // // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "VERSATILE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive full stack system for your web and mobile applications"
    ),
    emoji(
      "⚡ Progressive Web Applications ( PWA ) and Integration of third party services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California University of Management and Science",
      logo: require("./assets/images/california-university-of-management-and-sciences-removebg-preview.png"),
      subHeader: "Master of Management and Science",
      duration: "October 2016 - May 2018"
    },
    {
      schoolName: "Huazhong University of Science and Technology",
      logo: require("./assets/images/hustllogo.png"),
      subHeader: "Bachelor of Architectural",
      duration: "September 2004 - June 2008"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Chris and Company",
      companylogo: require("./assets/images/glory.png"),
      date: "Sep 2023 – Present",

      descBullets: [
        "Assisted in requirements analysis, high-level design, low-level design, and complex code development",
        "Collaborated with 3 engineering and design teams to integrate external APIs into web pages and applications",
        "Wrote front-end code, and back-end code, integrated 4+ with frameworks and APIs under mentor supervision",
        "Weekly meeting with client to identify needs and modify as required"
      ]
    },
    {
      role: "Full Stack Engineer in Training",
      company: "Thinkful",
      companylogo: require("./assets/images/thinkful-logo-2.png"),
      date: "Feb 2023 – Sep 2023",

      descBullets: [
        " Learned industry best practices and software development standards with a focus on Javascript, HTML5, CSS3, React Native, Node.js, PostgreSQL, RESTful API's, algorithms, and data structures",
        " Developed and deployed mobile-first applications while learning new languages and frameworks, spending several hours per week collaborating with and learning from senior web developers in a mentor-student relationship"
      ]
    },
    {
      role: "Project Manager",
      company: "Glory Investment",
      companylogo: require("./assets/images/ykp-logo-1.png"),
      date: "May 2017 – Nov 2020",

      descBullets: [
        "Oversaw the planning and construction of a 50,000 sq. ft. shopping plaza in Jurupa Valley, CA, with a construction budget of $10 million",
        "Managed the development of a 270,000 sq. ft. Campus Hotel at UC Riverside, CA, with a total project cost of $35 million",
        "Conducted interviews and selected the design and construction teams for both projects",
        "Coordinated with the city, design, and construction teams to ensure projects remained within budget, adhered to schedules, and met quality standards from initial planning through completion"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/staging.png"),
      projectName: "Virtual Staging Solutions",
      projectDesc:
        "RESTful API and PostgreSQL database, Frontend and Backend design",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://virtual-staging.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/FooterBowl_Small.webp"),
      projectName: "Restaurant Reservation",
      projectDesc: "A fullstack reservation and table management system",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://restaurant-client-26cm.onrender.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Responsive Web Design",
      subtitle:
        "Completed Certification from FreeCodeCamp for Responsive Web Design",
      image: require("./assets/images/cover-responsive.png"),
      imageAlt: "Responsive Web Design",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/TingZhang/responsive-web-design"
        }
      ]
    },
    {
      title: "Flex Engineering Program",
      subtitle:
        "Learned industry practices and software development standards.Developed and deployed mobile-first applications.",
      image: require("./assets/images/thinkful.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/16Rqs5KHomG5Oyjz5OLbTq_o7hDMPrdre/view?usp=sharing"
        }
      ]
    },
    {
      title: "Project Management Professional (PMP)®",
      subtitle:
        "Motivating people and teams through all phases of a successful project.",
      image: require("./assets/images/pmp.png"),
      imageAlt: "PMP",
      footerLink: [
        {
          name: "View PMP Certification",
          url: "https://drive.google.com/file/d/1FbFz29IT0hXlHen65kbS4mQ77BerDAMw/view?usp=sharing"
        }
      ]
    },

    {
      title: "LEED Green Associate",
      subtitle:
        "Empowered to advance green building practices and skills at work and in the community",
      image: require("./assets/images/LEED.png"),
      imageAlt: "leed green associate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1aOuHpzG4iWtjzT4-ddossAnVCimZ15uW/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+01 6262179631",
  email_address: "tinazhang616@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable
};
