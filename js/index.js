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
const skillsSelection = document.querySelector('#Skills');
const skillsList = skillsSelection.querySelector('ul');
for(let i=0 ; i< skills.length ; i++){
    let skill = document.createElement('li');
    skill.innerHTML= skills[i];
    skillsList.appendChild(skill);

}