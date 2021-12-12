// const fs = require("fs/promises");
// const contactsPath = require("./contactsPath");
const getAll = require("./getAll");
const updateContacts = require("./updateContacts");
const { v4 } = require("uuid");

const add = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await getAll();
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = add;
