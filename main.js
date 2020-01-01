// DISPLAY INTRO // DISPLAY INTRO // DISPLAY INTRO // DISPLAY INTRO // DISPLAY INTRO
var learnMoreButton = document.getElementById("learnMoreButton");
learnMoreButton.addEventListener("click", (e)=>{
    learnMoreButton.style.display = "none";
    // document.getElementById("about").style.height = "2em";
    document.getElementById("aboutText").classList.add("graduallyShown");
}, false);

// SMOOTH TRANSITION ANIMATION // SMOOTH TRANSITION ANIMATION // SMOOTH TRANSITION ANIMATION
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
var projectsButton = document.getElementById("projectsButton");
var projectsSec = document.getElementById("projects");
projectsButton.addEventListener("click", ()=>{
    scrollTo(projectsSec);
    for (let _ of projectsButtons) {
        _.classList.remove("focused");
    }
    document.getElementById("projectsButtons1").classList.remove("focused");
    setTimeout(()=>{
        document.getElementById("projectsButtons1").classList.add("focused");
    }, 500);
});

// DISPLAY PROJECTS // DISPLAY PROJECTS // DISPLAY PROJECTS // DISPLAY PROJECTS
var descriptions = [
    `Fast paced, intense 2 player platformer shooting game <br>
    Written with Python's Pygame library <br>
    Graphics designed with Pixilart`,
    `Simple but fun single player tank game <br>
    Written with Python's Pygame library <br>
    Graphics designed with Pixilart`,
    `A Convolutional Neural Network for constellation categorization <br>
    Written with TensorFlow Keras library <br>`,
    `A Web Application that detects audio files' chord progression <br>
    Utilized TensorFlow, HTML, JS, CSS, and Python <br>
    Developed under 24 hours during StarterHacks 2019 with 4 others`
];
var displays = [
    `<iframe width="640px" height="360px" src="https://www.youtube.com/embed/ntJ5wb_uzig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<img src="./img/battleBeast.png" height="100%" alt="battleBeast">`,
    `<img src="./img/orion.jpg" width="100%" alt="orion">`,
    `<img src="./img/snorpheus.png" width="100%" alt="snorpheus">`
];

var projectsButtons = document.getElementsByClassName("projectsButtons");
for (let i = 0; i < projectsButtons.length; i++) {
    projectsButtons[i].addEventListener("click", ()=>{
        for (let _ of projectsButtons) {
            _.classList.remove("focused");
        }
        projectsButtons[i].classList.add("focused");
        refreshDes(i);
        refreshDis(i);
    })
}

function refreshDes(index) {
    var des = document.getElementById("projectDes");
    des.innerHTML = descriptions[index];
}
function refreshDis(index) {
    var dis = document.getElementById("projectDis");
    dis.innerHTML = displays[index];
}
