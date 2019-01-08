'use strict'
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const output = `${chalk.bold(process.env.npm_package_config_name + ` ▲`)}
${chalk.white(process.env.npm_package_config_job_title)} | ${process.env.npm_package_config_location}

${chalk.white.bold(process.env.npm_package_config_description)}

${chalk.cyan(process.env.npm_package_config_website)}

${process.env.npm_package_config_github}
${process.env.npm_package_config_twitter}
${process.env.npm_package_config_linkedIn}

Email me at ${chalk.white.bold(process.env.npm_package_config_email)}`

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
