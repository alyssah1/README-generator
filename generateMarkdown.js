// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

#Project Name
${data.project}

# Description
${data.projectInput}

#Table of Contents
*[Project name](#Project name)
*[Project Description](#Description)
*[License](#License)
*[Installation](#Installation)
*[Run tests](#Run Tests)
*[Using Repo](#Using Repo)
*[Contribute to repo](#Contribute to repo)
*[Questions](#Questions)


# License
${data.license}

# Installation
${data.npmInput}

#Run tests
${data.npmTest}

#Using Repo
${data.useRepo}

#Contributing to repo
${data.contributeRepo}


$Demo/Screenshot

#Quesitons
If you have any questions please use the contacts down below:

#### Email address: ${data.email}
#### GitHub account: ${data.userName}

`;
}

module.exports = generateMarkdown;
