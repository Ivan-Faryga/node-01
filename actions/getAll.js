const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

const getAll = async () => {
  const contacts = await fs.readFile(contactsPath);
  const readableContacts = JSON.parse(contacts);
  return readableContacts;
};

module.exports = getAll;
