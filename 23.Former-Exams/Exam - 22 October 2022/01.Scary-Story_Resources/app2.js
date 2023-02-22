window.addEventListener("load", solve);

function solve() {
// Get input fields
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const ageInput = document.getElementById("age");
const genreInput = document.getElementById("genre");
const titleInput = document.getElementById("title");
const storyInput = document.getElementById("story");

// // Get preview section elements
// const previewList = document.getElementById("preview-list");
// const publishButton = document.getElementById("publish-button");
// const saveButton = document.getElementById("save-button");
// const editButton = document.getElementById("edit-button");
// const deleteButton = document.getElementById("delete-button");

// // Get main div
// const mainDiv = document.getElementById("main");

// // Get input values
// const getInputValues = () => {
//   const firstName = firstNameInput.value;
//   const lastName = lastNameInput.value;
//   const age = ageInput.value;
//   const genre = genreInput.value;
//   const title = titleInput.value;
//   const story = storyInput.value;
//   return { firstName, lastName, age, genre, title, story };
// };

// // Check if input fields are not empty
// const checkInputs = () => {
//   const { firstName, lastName, age, title, story } = getInputValues();
//   if (!firstName || !lastName || !age || !title || !story) {
//     return false;
//   }
//   return true;
// };

// // Add list item to preview list
// const addPreviewItem = () => {
//   const { firstName, lastName, age, genre, title, story } = getInputValues();
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `
//     <strong>Author:</strong> ${firstName} ${lastName}, <strong>Age:</strong> ${age}, <strong>Genre:</strong> ${genre} <br>
//     <strong>Title:</strong> ${title} <br>
//     <strong>Story:</strong> ${story}
//   `;
//   previewList.appendChild(listItem);
// };

// // Clear input fields
// const clearInputs = () => {
//   firstNameInput.value = "";
//   lastNameInput.value = "";
//   ageInput.value = "";
//   genreInput.value = "";
//   titleInput.value = "";
//   storyInput.value = "";
// };

// // Disable buttons
// const disableButtons = () => {
//   publishButton.disabled = true;
//   saveButton.disabled = false;
//   editButton.disabled = false;
//   deleteButton.disabled = false;
// };

// // Enable buttons
// const enableButtons = () => {
//   publishButton.disabled = false;
//   saveButton.disabled = true;
//   editButton.disabled = true;
//   deleteButton.disabled = true;
// };

// // Load input fields with preview item information
// const loadPreviewItem = (previewItem) => {
//   const previewItemText = previewItem.innerHTML;
//   const regex = /<strong>Author:<\/strong> (.*?), <strong>Age:<\/strong> (.*?), <

}
