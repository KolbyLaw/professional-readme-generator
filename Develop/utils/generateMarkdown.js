// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.readmeTitle}

${data.badgeInfo}
</br>

## Project Description
${data.readmeDescription}
</br></br>

---
## Table of Contents
* [Installation Instructions](#Installation-Instructions)
* [Usage Information](#Usage-Information)
* [License Information](#License-Information)
* [Contributing](#Contributing)
* [Testing Information](#Testing-Information)
* [Contact](#Contact)
---
</br></br>


## Installation Instructions
${data.readmeInstall}
</br></br>


## Usage Information
${data.readmeUsage}
</br></br>


## License Information
[${data.readmeLicense}](${data.licenseInfo})
</br></br>


## Contributing
${data.readmeContribute}
</br></br>


## Testing Information
${data.readmeTest}
</br></br>


## Contact
Questions, comments, or concerns regarding this project? Feel free to reach out to me directly via **[email](mailto:${data.readmeEmail})**, and be sure to take a look at my other work on **[GitHub](https://github.com/${data.readmeGitHub})**!


`;
}

module.exports = generateMarkdown;





