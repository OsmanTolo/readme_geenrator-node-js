import inquirer from "inquirer";
import fs from "fs/promises";

let {
  projectLogoPath,
  githubUsername,
  repoName,
  repoLink,
  projectTitle,
  projectDeploymentLink,
  projectSummary,
  projectImagePath,
  projectDescription,
  tableContents,
  installation,
  usage,
  contributing,
  tests,
  license,
  questions,
  author,
  acknowledgement,
  twitterHandle,
} = await inquirer.prompt([
  {
    type: "input",
    name: "projectLogoPath",
    message: "What is the source URL of your project logo?",
    default() {
      return "./assets/images/logo.png";
    },
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
    default() {
      return "osmanTolo";
    },
  },
  {
    type: "input",
    name: "repoName",
    message: "What is the name of your repository?",
    default() {
      return "readme_geenrator-node-js ";
    },
  },
  {
    type: "input",
    name: "repoLink",
    message: "What is the link to your repository?",
    default() {
      return "https://github.com/OsmanTolo/readme_geenrator-node-js";
    },
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
    default() {
      return "Professional README Generator";
    },
  },
  {
    type: "input",
    name: "projectImagePath",
    message: "What is the source URL of your project screenshot?",
    default() {
      return "./assets/images/screenshot.png";
    },
  },
  {
    type: "input",
    name: "projectDeploymentLink",
    message: "What is the link to your project?",
    default() {
      return "https://osmantolo.github.io/weather_now-apis-javascript/";
    },
  },
  {
    type: "input",
    name: "projectSummary",
    message: "What is the short projectDescription of your project?",
    default() {
      return "A simple web based application that allows users to see the weather forecast for any city.";
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "What is the projectDescription of your project?",
    default() {
      return "This is my project";
    },
  },
  {
    type: "input",
    name: "tableContents",
    message: "List your table of contents",
    default() {
      return "";
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Are there any steps required to install your project? If so, what are the steps?",
    default() {
      return "Provide instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.";
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
    default() {
      return "Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.";
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
    default() {
      return `Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!`;
    },
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test your project?",
    default() {
      return "If you have any tests you would like to run, please list them here.";
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    default() {
      return "MIT";
    },
  },
  {
    type: "input",
    name: "questions",
    message: "What are your questions?",
    default() {
      return "Please how can I run this project on macOS?";
    },
  },
  {
    type: "input",
    name: "author",
    message: "Who is the author of your project?",
    default() {
      return "Osman Dumbuya";
    },
  },
  {
    type: "input",
    name: "acknowledgement",
    message: "What is the acknowledgement of your project?",
    default() {
      return "[Othneil Drew's Best-README-Template](https://github.com/othneildrew/Best-README-Template)";
    },
  },
  {
    type: "input",
    name: "twitterHandle",
    message: "What is your Twitter handle?",
    default() {
      return "@osmantolo";
    },
  },
]);

let readmeContent = `
<br />
<!-- PROJECT LOGO -->
<div align="center">
 <a href="https://github.com/${githubUsername}/${repoName}">
    <img src=${projectLogoPath} alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">${projectTitle}</h3>
  <p align="center">${projectSummary}
    <br />
    <a href=${projectDeploymentLink}>View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#quesions">Questions</a></li>
  </ol>
</details>

<!-- Project ProjectDescription -->
## About The Project

[![Screenshot of the webpage](${projectImagePath})]

${projectDescription}

<!-- Installation -->
## Installation

${installation}


<!-- Usage -->
## Usage

${usage}


<!-- TEST EXAMPLES -->
## Tests

${tests}


<!-- Contributing -->
## Contributing

${contributing}


<!-- LICENSE -->
## License

Distributed under the ${license} License. See "LICENSE.txt" for more information.

<!-- CONTACT -->
## Contact

${author} - [${twitterHandle}\_](https://twitter.com/${twitterHandle})

Project Link: [${repoLink}](${repoLink})

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- ${acknowledgement}
`;
await fs.writeFile("./userREADME/README.md", readmeContent);
