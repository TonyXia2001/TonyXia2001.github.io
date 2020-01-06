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
    displayProjectPage();
    setTimeout(()=>{
        document.getElementById("projectsButtons1").classList.add("focused");
    }, 500);
});
// var skillsButton = document.getElementById("skillsButton");
// skillsButton.addEventListener("click", ()=>{
//     scrollTo(document.getElementById("skills"));
// })

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
    `<iframe height="100%" width="100%" src="https://www.youtube.com/embed/ntJ5wb_uzig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<img src="./img/battleBeast.png" height="100%" alt="battleBeast">`,
    `<img src="./img/orion.jpg" height="100%" alt="orion">`,
    `<img src="./img/snorpheus.png" height="100%" alt="snorpheus">`
];

var projectsButtons = document.getElementsByClassName("projectsButtons");
for (let i = 0; i < projectsButtons.length; i++) {
    projectsButtons[i].addEventListener("click", ()=>{
        for (let _ of projectsButtons) {
            _.classList.remove("focused");
        }
        projectsButtons[i].classList.add("focused");
        refreshProjectPage(i);
    })
}

refreshAnimationTime = 1000;
function refreshProjectPage(index) {
    var des = document.getElementById("projectDes");
    var dis = document.getElementById("projectDis");
    des.classList.remove("refreshed");
    dis.classList.remove("refreshed");
    void des.offsetTop;         // force DOM to recalculate the elem. Google "reflow"
    void dis.offsetTop;
    des.classList.add("refreshed");
    dis.classList.add("refreshed");
    setTimeout(()=>{des.innerHTML = descriptions[index];}, refreshAnimationTime/2);
    setTimeout(()=>{dis.innerHTML = displays[index];}, refreshAnimationTime/2);
}
function displayProjectPage() {
    var des = document.getElementById("projectDes");
    var dis = document.getElementById("projectDis");
    var title = document.getElementById("projectsTitleText");
    des.classList.remove("refreshed");
    dis.classList.remove("refreshed");
    void des.offsetTop;
    void dis.offsetTop;
    void title.offsetTop;
    des.classList.add("appeared");
    dis.classList.add("appeared");
    title.classList.add("appeared");
    setTimeout(()=>{
        des.classList.remove("appeared");
        dis.classList.remove("appeared");
        title.classList.remove("appeared");
    }, 1000);
}
