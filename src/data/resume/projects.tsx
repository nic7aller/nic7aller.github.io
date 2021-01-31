import { Text, Anchor } from "grommet";
import { ResumeCategory } from "../../types/resumeCategory";

const projects: ResumeCategory = {
  name: "Projects",
  items: [
    {
      header: "Club YGOhio Tournament Mobile App",
      subheader: "Solo Project",
      dates: "December 2018 - January 2019",
      body: [
        "Created mobile application with Flutter for Club YGOhio to manage their members' tournament scores",
        "Worked with Club YGOhio's Executive Board to create their desired user experience",
      ],
      footer: (
        <Text>
          Check out the project on{" "}
          <Anchor
            weight="normal"
            href="https://github.com/nic7aller/ygoh_tournaments"
          >
            GitHub
          </Anchor>
        </Text>
      ),
    },
    {
      header: "CSE 5914 Capstone Project: Henry by Greatle",
      subheader: "Class Team Project",
      dates: "January 2019 - April 2019",
      body: [
        "Built a self-improvement Alexa Skill that gives advice, trcks goals, and can help keep a journal",
        "Utilized AWS Lambda to host the core of the skill's features",
        "Sourced advice based on a collection of quotes stored in and queried with IBM Watson Discovery",
      ],
      footer: (
        <Text>
          Check out the project on{" "}
          <Anchor weight="normal" href="https://github.com/nic7aller/Greatle">
            GitHub
          </Anchor>
        </Text>
      ),
    },
    {
      header: "CSE 5236 PackMap Android App",
      subheader: "Class Team Project",
      dates: "August 2018 - December 2018",
      body: [
        "Worked with 2 classmates on an Android app to allow users to decide on a location to go to based on a map and voting system",
        "Wrote the native application in Java using Android Studio",
        "Utilized Firebase services including Firestore, Functions, and Cloud Messaging",
      ],
    },
    {
      header: "CSE 3902 2D Platformer Game Project",
      subheader: "Class Team Project",
      dates: "January 2017 - April 2017",
      body: [
        "Collaborated with 4 other students on an Agile development team to build a Super Mario Bros. clone",
        "Focused on Object-Oriented software design using C# and Monogame",
        "Led team meetings and software design discussions",
      ],
    },
    {
      header: "BiP Switch Project",
      subheader: "MakeOHI/O 2017 Hackathon Project (Solo)",
      dates: "March 2017",
      body: [
        "Built a smart light switch that can be controlled via any device with access to an internet browser on the same network as well as a touchscreen interface",
        "Utilized a Raspberry Pi 2 and Flask framework to create a web server to control a relay",
        "Displayed current weather as well as an inspirational quote",
      ],
      footer: (
        <Text>
          Check out the project{" "}
          <Anchor
            weight="normal"
            href="https://drive.google.com/open?id=0B_5uob2tliwgWnp0ZFdnZXhIeDg"
          >
            here
          </Anchor>{" "}
          and on{" "}
          <Anchor
            weight="normal"
            href="https://GitHub.com/nic7aller/bip-switch"
          >
            GitHub
          </Anchor>
        </Text>
      ),
    },
    {
      header: "CatScratch",
      subheader: "BoilerMake 2017 Hackathon Project",
      dates: "January 2017",
      body: [
        'Crafted a web app that replaced profanity and harassing words in tweets with "SPACE CAT"',
        "Integrated the Tweepy API in a Python script to query tweets and the Flask framework to communicate with app",
        "Utilized Node.js, ExpressJS, and Pug with JavaScript to create web app to display and search for tweets",
        "Used MongoDB Atlas to store modified tweets",
        "Submitted as a project to support the fight against online harassment and cyberbullying",
      ],
      footer: (
        <Text>
          Check out the project on{" "}
          <Anchor weight="normal" href="https://GitHub.com/ggersh/cat-scratch">
            GitHub
          </Anchor>
        </Text>
      ),
    },
    {
      header: "FootPass",
      subheader: "HackOHI/O 2016 Hackathon Project",
      dates: "November 2016",
      body: [
        "Created a web app that let users search for a location and navigate with an on-screen compass",
        "Built using AngularJS and Apache Cordova framework so the web app could be a native Android or iOS app",
        "Integrated the Google Places API into app for finding location search results",
      ],
    },
    {
      header: "ModemCare",
      subheader: "ArchHacks 2016 Hackathon Project",
      dates: "November 2016",
      body: [
        "Created a software suite to allow for the transfer of medical forms over sound through an aux cord",
        "Built receiving app to receive the forms with Electron framework and sending app with Ionic framework",
        "Implemented transfer of sound with QuietJS",
        "Offered a secure and simple way to fill out and transfer medical forms",
      ],
      footer: (
        <Text>
          Check out the project on{" "}
          <Anchor
            weight="normal"
            href="https://github.com/PascalRascal/ModemCare"
          >
            GitHub
          </Anchor>
        </Text>
      ),
    },
    {
      header: "Honors Robot Design Project",
      subheader: "Class Team Project",
      dates: "January 2016 - April 2016",
      body: [
        "Designed and built an autonomous robot on a team of 4 students",
        "Documented entire process thoroughly from brainstorming to testing",
        "Lead documentation portion of project and aided in programming robot",
      ],
    },
    {
      header: "BinoSwitch Project",
      subheader: "Solo Project",
      dates: "September 2014 - January 2015",
      body: [
        "Constructed a functioning light switch controlled through an Android application including the ability to print a short message",
        "Utilized an Arduino Uno and shields to create the switch and developed Android application with MIT's AppInventor",
      ],
      footer: (
        <Text>
          Check out the project on{" "}
          <Anchor
            weight="normal"
            href="https://drive.google.com/open?id=0B_5uob2tliwgcmt0aHdoVlNiSjg"
          >
            here
          </Anchor>
        </Text>
      ),
    },
  ],
};

export default projects;
