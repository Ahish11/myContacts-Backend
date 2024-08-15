const getContacts = (request, response) => {
  response.status(200).json({ message: "Get all message" });
};

const createContact = (request, response) => {
  response.status(201).json({ message: "Create Contact" });
};

const getContact = (request, response) => {
  response
    .status(200)
    .json({ message: `get contact for  ${request.params.id}` });
};

const updateContact = (request, response) => {
  response.status(200).json({message:`update contact for  ${request.params.id}`})
}

const deleteContact = (request, response) => {
  response.status(200).json({message:`delete contact for  ${request.params.id}`})
}

module.exports = { getContacts, createContact, getContact,updateContact,deleteContact };
