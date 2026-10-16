// TASK 1: Store student information in an array

const students = [
{
name: "Varsha Manjunath",
course: "Computer Science Engineering",
skill: "JavaScript",
status: "Learning"
},
{
name: "Saniya Nizam",
course: "Information Technology",
skill: "HTML & CSS",
status: "Completed"
},
{
name: "Shreya Ramesh",
course: "Computer Science Engineering",
skill: "Python",
status: "In Progress"
},
{
name: "Mahadeva Swamy",
course: "Artificial Intelligence",
skill: "Machine Learning",
status: "Learning"
},
{
name: "Yashu Krishna",
course: "Information Technology",
skill: "React.js",
status: "In Progress"
}
];

// TASK 2: Select DOM elements

const heading = document.getElementById("mainHeading");

const profileContainer = document.querySelector("#profileContainer");

const studentCount = document.getElementById("studentCount");

const welcomeMessage = document.getElementById("welcomeMessage");

// TASK 3: Modify the heading using textContent

heading.textContent = "Student Management Dashboard";

// TASK 4: Update the student count dynamically

studentCount.textContent = students.length;

// TASK 5: Change the welcome message using textContent

welcomeMessage.textContent = "Welcome! Explore the profiles of our students and discover their learning progress.";

// TASK 6: Create student cards dynamically

students.forEach(function(student, index) {

// Create the main card
const card = document.createElement("div");

card.className = "student-card";

// Create the student avatar
const avatar = document.createElement("div");

avatar.className = "student-avatar";

avatar.textContent = student.name.charAt(0);

// Create student name
const name = document.createElement("h3");

name.className = "student-name";

name.textContent = student.name;

// Create course information
const course = document.createElement("p");

course.className = "course-name";

course.textContent = student.course;

// Create skill section
const skillSection = document.createElement("div");

skillSection.className = "skill-section";

const skillLabel = document.createElement("span");

skillLabel.className = "detail-label";

skillLabel.textContent = "Primary Skill";

const skillName = document.createElement("p");

skillName.className = "skill-name";

skillName.textContent = student.skill;

// Add skill details to the skill section
skillSection.appendChild(skillLabel);

skillSection.appendChild(skillName);

// Create learning status
const statusLabel = document.createElement("span");

statusLabel.className = "detail-label";

statusLabel.textContent = "Learning Status";

const status = document.createElement("span");

status.className = "learning-status";

status.textContent = student.status;

// Add all elements to the card
card.appendChild(avatar);

card.appendChild(name);

card.appendChild(course);

card.appendChild(skillSection);

card.appendChild(statusLabel);

card.appendChild(status);

// Add the card to the profile container
profileContainer.appendChild(card);

});

// TASK 7: Highlight the first student card using classList.add()

const firstStudentCard = profileContainer.firstElementChild;

firstStudentCard.classList.add("highlight");

// TASK 8: Remove the last student card using remove()

const lastStudentCard = profileContainer.lastElementChild;

lastStudentCard.remove();

// TASK 9: Update the student count after removing a card

studentCount.textContent =
profileContainer.children.length;
