import inquirer from "inquirer";
import fs from "fs";
import ora from "ora";
import synchronizedPrettier from "@prettier/sync";
import toCamelCase from "lodash.camelcase";

const spinner = ora("Creating component...");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter component name...",
    validate: (answer) => {
      const isValidDir = !fs.existsSync(`./src/components/${answer}`);
      const isValidName = !!answer.trim();

      if (!isValidName) return "Invalid component name";
      if (!isValidDir) return "Component already exists";

      return true;
    },
    filter: (answer) => answer.trim(),
  },
  {
    type: "confirm",
    name: "scss",
    message: "Add SCSS...",
  },
];

inquirer
  .prompt(questions)
  .then(async (answers) => {
    console.clear();
    spinner.start();

    fs.mkdirSync(`./src/components/${answers.name}`);

    const mainContent = `
      ${answers.scss ? `import "./${answers.name}.scss";` : ""}

      function ${answers.name}() {
        return <div${answers.scss ? ` className="${toCamelCase(answers.name)}"` : ""}>${answers.name}</div>;
      }

      export default ${answers.name};
    `;

    const indexContent = `
      import ${answers.name} from './${answers.name}';

      export default ${answers.name};
    `;

    if (answers.scss) {
      const scssFormattedContent = synchronizedPrettier.format(
        `.${toCamelCase(answers.name)}{}`,
        { parser: "scss" }
      );

      fs.writeFileSync(
        `./src/components/${answers.name}/${answers.name}.scss`,
        scssFormattedContent
      );
    }

    const mainFormattedContent = synchronizedPrettier.format(mainContent, {
      parser: "babel",
    });
    fs.writeFileSync(
      `./src/components/${answers.name}/${answers.name}.tsx`,
      mainFormattedContent
    );

    const indexFormattedContent = synchronizedPrettier.format(indexContent, {
      parser: "babel",
    });
    fs.writeFileSync(
      `./src/components/${answers.name}/index.ts`,
      indexFormattedContent
    );

    setTimeout(() => {
      spinner.succeed("Done!");
    }, 2000);
  })
  .catch((error) => {
    spinner.fail("Something went wrong");
    console.log(error);
  });
