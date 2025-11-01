let note = prompt("Enter your note");

const saveNoteToLocalStorage = (note) => {
  localStorage.setItem("notes", note);
};
saveNoteToLocalStorage(note);
const userNote = localStorage.getItem("notes");

document.querySelector(".note").firstElementChild.textContent =
  "Notes:" + userNote;
document.querySelector("p").style.color = "red";
console.log(userNote);

// Now we are goinng to save the objects into localSTorage by converting into string first.
//Yes, objects can be stored in localStorage, but not directly in their native JavaScript object format. localStorage only stores data as strings. To store an object, it must first be converted into a JSON string using JSON.stringify().

// 1️⃣ Create your object
const userData = {
  name: "Anisha",
  age: 23,
  isFemale: true,
};

// 2️⃣ Save to localStorage
const saveUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

saveUser(userData);
// 3️⃣ Get user from localStorage
const getUser = localStorage.getItem("user");
const user = JSON.parse(getUser);
console.log(user); // { name: "Anisha", age: 23, isFemale: true }

const div = document.createElement("div");

// ✅ Convert object to readable format
div.textContent = `Name: ${user.name}, Age: ${user.age}, Female: ${user.isFemale}`;

//  it appears as the last element of body tag
//document.body.appendChild(div);

// document.querySelector("script").before(div);   Inserts before first <script>
document.querySelector("body script:last-of-type").before(div);
// another way to apply id then select id.
