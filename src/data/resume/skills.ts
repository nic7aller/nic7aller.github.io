import { ResumeCategory } from "../../types/resumeCategory";

const skills: ResumeCategory = {
  name: "Skills",
  items: [
    {
      header: "Languages",
      subheader: "Advanced",
      body: ["Java", "Typescript", "NoSQL", "Python", "HTML/CSS", "C#", "Dart"],
    },
    {
      header: "Languages",
      subheader: "Familiar",
      body: ["SQL", "C/C++", "Scala", "Kotlin"],
    },
    {
      header: "Frameworks",
      subheader: "Typescript/Javascript",
      body: ["React", "Vue.js", "Jest", "jQuery"],
    },
    {
      header: "Frameworks",
      subheader: "Java",
      body: ["Spring", "Guice", "Mockito", "JSP/JSF"],
    },
    {
      header: "Frameworks",
      subheader: "Others/Cross Platform",
      body: ["AWS SDK", "Firebase", "Flask", "Flutter"],
    },
  ],
};

export default skills;
