const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const removeById = async (id) => {
  const contacts = await getAll();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const removeContact = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
};

module.exports = removeById;
