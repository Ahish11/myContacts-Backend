//npm i install express-async-handler install
const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "Get all message" });
});

//*we are using moongoose it returns a promise so we need a async.
// *Need try and catch for all api instead doing that Middleware express asynchandler (error nd exception handler)

const createContact = asyncHandler(async (request, response) => {
  console.log("req body-->", request.body);
  const { name, email, phone } = request.body;
  if (!name || !email || !phone) {
    //the error will be displayed in html format. to avoid that we need errorhandler middleware folder
    response.status(400);
    throw new Error("All fields are Mandatory");
  }
  response.status(201).json({ message: "Create Contact" });
});

const getContact = asyncHandler(async (request, response) => {
  response
    .status(200)
    .json({ message: `get contact for  ${request.params.id}` });
});

const updateContact = asyncHandler(async (request, response) => {
  response
    .status(200)
    .json({ message: `update contact for  ${request.params.id}` });
});

const deleteContact = asyncHandler(async (request, response) => {
  response
    .status(200)
    .json({ message: `delete contact for  ${request.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
