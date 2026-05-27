const footer = document.createElement('footer');
footer.className = 'footer';
const body = document.querySelector('body');
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');

copyright.className = 'copyright';
copyright.innerHTML = `\u00A9 Arthur Osorio ${thisYear}`;

footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Adobe Creative Cloud", "Github", "Autodesk Maya", "Mudbox", "GIMP", "Blender", "Canva", "Photography"];
const skillsSelection = document.querySelector('#skills');
const skillsList = skillsSelection.querySelector('ul');
for(let i=0 ; i< skills.length ; i++){
    let skill = document.createElement('li');
    skill.innerHTML= skills[i];
    skillsList.appendChild(skill);

}

const messageForm = document.querySelector('form[name="leave_message"]')
messageForm.addEventListener("submit", function(event) {

event.preventDefault();
const usersName = event.target.usersName.value ;
const usersEmail = event.target.usersEmail.value ;
const usersMessage = event.target.usersMessage.value ;

console.log(usersName, usersEmail, usersMessage);

const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
<span>${usersMessage}</span>`

const removeButton = document.createElement('button');
removeButton.innerText= 'Remove';
removeButton.type = 'button';

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

removeButton.addEventListener("click", function(event){
const entry = event.target.parentNode;
entry.remove();

});

messageForm.reset();
});


