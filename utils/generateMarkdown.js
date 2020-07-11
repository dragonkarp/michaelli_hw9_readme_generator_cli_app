function generateMarkdown(data) {
  return `

  # Table of Content
  -[description](#description)
  -[installation](#installation)
          
  ## badge:
  ${data.badge}
  ## project:
  ${data.project}
  ## description
  ${data.description}
  ## contents:
  ${data.contents}
  ## installation:
  ${data.installation}
  ## usage:
  ${data.usage}
  ## license:
  ${data.license}
  ## contributors:
  ${data.contributors}
  ## testing:
  ${data.testing}
  ## email:
  ${data.email}
  `;
}

module.exports = generateMarkdown;
