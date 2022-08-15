let courses;
fetch("http://localhost:3000/courses")
  .then((response) => response.json())
  .then((json) => {
    courses = json;
    console.log(courses);
    displayData(courses);
  })
  .catch(function (e) {
    console.log("Error", e);
  });
let old_section;
let data;
function displayData(courses) {
  // deleting old data
  old_section = document.querySelector("#courses-cards-section");
  old_section.innerHTML = "";
  data = courses;
  for (let i = 0; i < data.length; i++) {
    createElement(i);
  }
}
function createElement(i) {
  // adding course
  const new_course = document.createElement("div");
  new_course.classList.add("course");
  old_section.appendChild(new_course);

  // adding card
  const new_card = document.createElement("div");
  new_card.classList.add("card-img");
  console.log(new_card.classList);
  new_course.appendChild(new_card);

  // adding image
  const new_img = document.createElement("img");
  new_img.src = data[i].image;
  new_img.classList.add("course-img");
  new_card.appendChild(new_img);

  //Creating title
  const h4 = document.createElement("h4");
  h4.textContent = data[i].title;
  h4.classList.add("course-caption");
  new_card.appendChild(h4);

  // Creating Author
  const author = document.createElement("p");
  author.textContent = data[i].instructors[0].name;
  new_card.appendChild(author);

  //Creating Rating Div
  const new_div = document.createElement("div");
  new_card.appendChild(new_div);
}

function addRating(rating) {
  const div = document.createElement("div");
  const span1 = document.createElement("span");
  span1.textContent = rating;
  span1.classList.add("stars");
  div.appendChild(span1);
  // for(let i = 0;i<4;i++){
  //     const span = document.createElement('span') ;
  //     span.classList.add("bi bi-star-fill");
  //     div.appendChild(span);
  // }
  const span = document.createElement("span");
  // span.classList.add("fa fa-star-half-full stars");
  div.appendChild(span);
  return div;
}
function search(value) {
  for (let i = 0; i < data.length; i++) {
    let title = data[i].title;
    if (title.indexOf(value) != -1) {
      createElement(i);
    }
  }
}
const search_button = querySelector(".search-button");
const search_bar = querySelector(".search-bar");
search_button.onclick = function () {
  const search_val = search_bar.value;
  search(search_val);
};
// <div class="course">
// <div class="card-img">
//     <img src="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg" alt="python" />
// </div>
// <h4>Learn Python: The Complete <br> Python Programming Course</h4>
// <p class="author">Avinash Jain, The Codex</p>
// <div class="rating">
//     <span class="stars">4.4</span>
//     <span class="bi bi-star-fill"></span>
//     <span class="bi bi-star-fill"></span>
//     <span class="bi bi-star-fill"></span>
//     <span class="bi bi-star-fill"></span>
//     <span class="bi bi-star-half"></span>
//     <span class="grey">(17.972)</span>
// </div>
// <span class="price">E£199.99 <s>E£679.99</s></span>
// </div>
