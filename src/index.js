const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

module.exports = {
  Engineer,
  Intern,
  Manager,
  Employee,
};

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const teamAndManager = async () => {
  try {
    //declare the question
    const questions = [
      {
        type: "input",
        message: "Enter team manager's name",
        name: "teamManagerName",
      },

      {
        type: "input",
        message: "Enter manager's employee ID",
        name: "teamManagerEmployeeId",
      },
      {
        type: "input",
        message: "Enter team manager's email address",
        name: "teamManagerEmailAddress",
      },

      {
        type: "input",
        message: "Enter team manager's office number",
        name: "officeNumber",
      },
    ];

    //prompt the questions to get answers
    const answers = await inquirer.prompt(questions);
    console.log(answers.teamManagerName);
    // return the answers
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

const teamBuild = async () => {
  try {
    //declare the question
    const questions = [
      {
        type: "list",
        message: "What would you like to do?",
        name: "task",
        choices: [
          { name: "Add an engineer", value: "addEngineer" },
          { name: "Add an intern", value: "addIntern" },
          { name: "Finish building the team", value: "quit" },
        ],
      },
    ];

    //prompt the questions to get answers
    const answers = await inquirer.prompt(questions);

    // return the answers
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

const addingEngineer = async () => {
  try {
    //declare the question
    const questions = [
      {
        type: "input",
        message: "Add the engineer name",
        name: "engineerName",
      },

      {
        type: "input",
        message: "Add the engineer ID",
        name: "engineerID",
      },
      {
        type: "input",
        message: "Add the engineer's email address",
        name: "engineerEmailAddress",
      },
      {
        type: "input",
        message: "Add the engineer's GitHub link ",
        name: "engineerGitHubLink",
      },
    ];

    //prompt the questions to get answers
    const answers = await inquirer.prompt(questions);

    // return the answers
    return answers;
  } catch (error) {
    console.log("Error: ${error.message}");
    process.exit(0);
  }
};

const addingIntern = async () => {
  try {
    //declare the question
    const questions = [
      {
        type: "input",
        message: "Add the intern name",
        name: "internName",
      },

      {
        type: "input",
        message: "Add the intern ID",
        name: "internID",
      },

      {
        type: "input",
        message: "Add the intern's email address",
        name: "internEmailAddress",
      },

      {
        type: "input",
        message: "Add the intern's school",
        name: "internSchool",
      },
    ];

    //prompt the questions to get answers
    const answers = await inquirer.prompt(questions);

    // return the answers
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

const constructHtmlFile = (answers, teamName) => {
  return ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Team Profile Generator</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <!--css link-->
      <link rel="stylesheet" href="dist/styles.css" />
      <link rel="stylesheet" href="./styles.css" />
    </head>
  
    <body>
      <header class="main-header">
        <h1> ${teamName}
        </h1>
      </header>
  
      <main class="cards">
        
  
     ${constructManagerHtml(answers.manager)}
  
       ${answers.engineers.map(constructEngineerHtml)}

       ${answers.interns.map(constructInternHtml)}
      </main>
    </body>
  </html>
   `;
};

const constructManagerHtml = (manager) => {
  return ` <section class="card">
<header>
  ${manager.teamManagerName}
  <div>
    <h7>Manager</h7>
  </div>
</header>
<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.teamManagerEmployeeId}</li>
    <li class="list-group-item">Email: ${manager.teamManagerEmailAddress}</li>
    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
  </ul>
</div>
</section>`;
};

const constructEngineerHtml = (engineer) => {
  return ` <section class="card">
<header>
  ${engineer.engineerName}
  <div>
    <h7>Engineer</h7>
  </div>
</header>
<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${engineer.engineerID}</li>
    <li class="list-group-item">Email: ${engineer.engineerEmailAddress}</li>
    <li class="list-group-item">GitHub: ${engineer.engineerGitHubLink}</li>
  </ul>
</div>
</section>`;
};

//${constructEngineerHtml(answers.Engineer)}

const constructInternHtml = (intern) => {
  return ` <section class="card">
<header>
  ${intern.internName}
  <div>
    <h7>Intern</h7>
  </div>
</header>
<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${intern.internID}</li>
    <li class="list-group-item">Email: ${intern.internEmailAddress}</li>
    <li class="list-group-item">School: ${intern.internSchool}</li>
  </ul>
</div>
</section>`;
};

const start = async () => {
  const { teamName } = await inquirer.prompt([
    {
      type: "input",
      message: "Enter team name",
      name: "teamName",
    },
  ]);
  //get answers
  const manager = await teamAndManager();
  console.log(manager);
  console.log(teamName);
  let continueTask = true;
  const engineers = [];
  const interns = [];

  while (continueTask) {
    const { task } = await teamBuild();
    if (task === "addIntern") {
      console.log("add intern");
      // call add intern here

      const intern = await addingIntern();
      interns.push(intern);
      console.log(intern);
    }

    if (task === "addEngineer") {
      console.log("add engineer");
      // call add engineer here
      // return;
      const engineer = await addingEngineer();
      engineers.push(engineer);
      console.log(engineer);
    }

    if (task == "quit") {
      continueTask = false;

      var answers = {
        manager: manager,
        engineers: engineers,
        interns: interns,
      };

      let htmlData = constructHtmlFile(answers, teamName);

      // write html file
      writeToFile("teamList.html", htmlData);
    }
  }

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  console.log("Successfully generated HTML file");
};

start();
