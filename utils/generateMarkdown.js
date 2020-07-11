function generateMarkdown(data) {
  return `
  # README

  # Table of Content
  -[project](##project)
  -[description](##description)
  -[installation](##installation)
  -[usage](##usage)
  -[license](##license)
  -[contributors](##contributors)
  -[testing](##testing)
  -[email](##email)
  -[photo](##photo link)

  ## project:
  ${data.project}

  ## description
  ${data.description}

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

  ## photo:
  ${data.photo}
  `;
}

module.exports = generateMarkdown;
