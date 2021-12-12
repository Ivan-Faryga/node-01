const { program } = require("commander");
const invokeAction = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const options = program.opts();
console.log(options);
invokeAction(options);
//=====================YARGS======================
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);

// InvokeAction(argv);
