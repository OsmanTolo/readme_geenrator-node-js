import inquirer from "inquirer";
import fs from "fs";

let {
  projectTitle,
  description,
  tableContents,
  installation,
  usage,
  contribution,
  tests,
  license,
  questions,
  author,
  email,
} = await inquirer.prompt([
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
    default() {
      return "My Project";
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
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
    name: "contribution",
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
      return "";
    },
  },
]);
