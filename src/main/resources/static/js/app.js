let myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];

function enroll(course){

if(!myCourses.includes(course)){
myCourses.push(course);
localStorage.setItem('myCourses', JSON.stringify(myCourses));

alert(course + ' Enrolled Successfully');
}

}

function loadCourses(){

const list = document.getElementById('courseList');

if(list){

myCourses.forEach(course=>{

const li = document.createElement('li');
li.innerText = course;
list.appendChild(li);

});

}

}

function addCourse(){

const title = document.getElementById('title').value;

const ul = document.getElementById('adminCourses');

const li = document.createElement('li');

li.innerText = title;

ul.appendChild(li);

alert('Course Added Successfully');

}

function searchCourses(){

const search = document.getElementById('searchInput').value.toLowerCase();

const cards = document.querySelectorAll('.course-card');

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(search)){
card.style.display='block';
}else{
card.style.display='none';
}

});

}

window.onload = loadCourses;