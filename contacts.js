const contactsOperations = require("./actions");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.getAll();
      console.table(contacts);
      break;
    case "get":
      const contact = await contactsOperations.getById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.add({ name, email, phone });
      console.log(newContact);
      break;
    case "update":
      const updateContact = await contactsOperations.updateById({
        name,
        email,
        phone,
        id,
      });
      console.log(updateContact);
      break;
    case "remove":
      const removeContact = await contactsOperations.removeById(id);
      console.log(removeContact);
      break;
    default: {
      console.log("Unknow action");
    }
  }
};

module.exports = invokeAction;

//=======================getAll===========================
// invokeAction({ action: "list" });

//=======================getById==========================
// const id = "8";
// invokeAction({ action: "get", id });

//=======================ADD==============================
// const data = {
//   name: "Bob",
//   email: "bob.bob@bob.com",
//   phone: "(123) 123-1234",
// };
// invokeAction({ action: "add", ...data });

//======================updateById========================
// const updateData = {
//   name: "Bob",
//   email: "newbob@newbob.com",
//   phone: "(456) 465-4657",
// };
// const updateId = "1df8423f-a174-4d95-ae26-efeca5986e6d";
// invokeAction({ action: "update", ...updateData, id: updateId });

//========================removeById======================
// const removeId = "1df8423f-a174-4d95-ae26-efeca5986e6d";
// invokeAction({ action: "remove", id: removeId });
