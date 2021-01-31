import { ResumeCategory } from "../../types/resumeCategory";

const work: ResumeCategory = {
  name: "Work",
  items: [
    {
      header: "Software Development Engineer (SDE), Amazon.com",
      subheader: "Seattle, WA",
      dates: "July 2019 - Present",
      body: ["TBD"],
    },
    {
      header: "Web Developer, Center for Design and Manufacturing Excellence",
      subheader: "Columbus, OH",
      dates: "February 2019 - May 2019",
      body: [
        "Managed the Center's Drupal-based website",
        "Crafted a Welcome Display Board that utilized Google Slides and Apps Script to automatically update slides with current data from Salesforce",
        "Documented work and created guides to help others create consistent content for both the website and Display Board",
      ],
    },
    {
      header: "Software Development Engineer (SDE) Intern, Amazon.com",
      subheader: "Seattle, WA",
      dates: "May 2018 - August 2018",
      body: [
        "Developed solution to update Redshift tables with AWS Lambda and other AWS resources",
        "Created reusable library to make solution easily implemented by other teams throughout organization",
        "Reduced AWS spending by approximately 90% and reduced update time of Redshift tables by half",
      ],
    },
    {
      header: "Developer Intern / Part-time Developer, Lexon Corporation",
      subheader: "Dublin, OH",
      dates: "May 2017 - May 2018",
      body: [
        'Worked on Lexon’s main product C. Core 10 developing full stack for "screens" using Java EE, JSF, JPA, and Oracle SQL',
        "Collaborated with business analysts and other developers to build the best solutions to improve user experience",
        "Created vital screens to be deployed in future release of C. Core 10",
        "Continued developing side projects and additional screens for C. Core 10 during the school year part-time",
      ],
    },
    {
      header:
        "Undergraduate Teaching Assistant, Department of Engineering Education",
      subheader: "Columbus, OH",
      dates: "August 2016 - May 2017",
      body: [
        "Assisting over 70 students in Fundamentals of Engineering class and with their design-build project",
        "Taught engineering concepts using Microsoft Excel, MATLAB, C++, and SolidWorks",
      ],
    },
    {
      header: "Information Systems Intern, Toledo Museum of Art",
      subheader: "Toledo, OH",
      dates: "June 2016 - August 2016",
      body: [
        "Worked with users to troubleshoot technology issues",
        "Imaged and set up new computers to the specifications of the user",
        "Upgraded anti-virus service on all computers in an efficient manner",
        "Maintained and improved inventory of computers",
        "Organized recycling of outdated technology",
      ],
    },
  ],
};

export default work;
