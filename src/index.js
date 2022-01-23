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
// const questions = [
//   {
//     type: "input",
//     message: "Enter team name",
//     name: "team name",
//   },
// ];

// inquirer
//   .prompt(questions)
//   .then((answer) => {
//     console.log(answers);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const teamAndManager = async () => {
  try {
    //declare the question
    const questions = [
      {
        type: "input",
        message: "Enter team name",
        name: "teamName",
      },
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
        name: "team manager's office number",
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

const teamBuild = async () => {
  try {
    //declare the question
    const questions = [
      {
        type: "list",
        message: "What would you like to do?",
        name: [choices],
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
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
        message: "Add the engineer's office number ",
        name: "engineerOfficeNumber",
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

const constructHtmlFile = (answers) => {
  return `# <!DOCTYPE html>
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
        <h1> ${answers.teamAndManager.teamname}
        </h1>
      </header>
  
      <main class="cards">
        
  
     ${constructManagerHtml(answers.teamAndManager)}


  
        <section class="card">
          <header>
            Grace
            <div>
              <h7>Engineer</h7>
            </div>
          </header>
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:3</li>
              <li class="list-group-item">Email: grace@fakemail.com</li>
              <li class="list-group-item">GitHub: gchoi2u</li>
            </ul>
          </div>
        </section>
  
        <section class="card">
          <header>
            Tammer
            <div>
              <h7>Engineer</h7>
            </div>
          </header>
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:4</li>
              <li class="list-group-item">Email: tammer@fakemail.com</li>
              <li class="list-group-item">GitHub: tammerg</li>
            </ul>
          </div>
        </section>
  
       
      </main>
    </body>
  </html>
   `;
};

const constructManagerHtml = (answers) => {
  return `# <section class="card">
<header>
  Jared
  <div>
    <h7>Manager</h7>
  </div>
</header>
<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:1</li>
    <li class="list-group-item">Email: jared@fakemail.com</li>
    <li class="list-group-item">Office number: 1</li>
  </ul>
</div>
</section>`;
};

const constructEngineerHtml = (answers) => {
  return `#  <section class="card">
<header>
  Alec
  <div>
    <h7>Engineer</h7>
  </div>
</header>
<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:2</li>
    <li class="list-group-item">Email: alex@fakemail.com</li>
    <li class="list-group-item">GitHub: ibealec</li>
  </ul>
</div>
</section>`;
};

const constructInternHtml = (answers) => {
  return `# <section class="card">
<header>
  John
  <div>
    <h7>Intern</h7>
  </div>
</header>
<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:5</li>
    <li class="list-group-item">Email: john@fakemail.com</li>
    <li class="list-group-item">School: 2University</li>
  </ul>
</div>
</section>`;
};

const start = async () => {
  //get answers
  const answers = await teamAndManager();
  const team = await teamBuild();
  const engineer = await addingEngineer();
  const intern = await addingIntern();

  const readme = constructHtmlFile(answers);

  //write to file
  console.log(answers);
  console.log(team);
  console.log(engineer);
  console.log(intern);

  writeToFile("GENERATED_HTML.html", htmlfile);

  console.log("Successfully generated HTML file");
};

start();
