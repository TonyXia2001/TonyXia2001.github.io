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
var skillsButton = document.getElementById("skillsButton");
skillsButton.addEventListener("click", ()=>{
    scrollTo(document.getElementById("skills"));
    displaySkillsPage();
})

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
    Developed under 24 hours during StarterHacks 2019 with 4 others`,
    `Managed over 10 years' worth of data <br>
    Analyzed the trend of AP exam scores over the past few years <br>
    Determined the relative difficulty of various AP exams`
];
var displays = [
    `<iframe height="100%" width="100%" src="https://www.youtube.com/embed/ntJ5wb_uzig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<img src="./img/battleBeast.png" height="100%" alt="battleBeast">`,
    `<img src="./img/orion.jpg" height="100%" alt="orion">`,
    `<img src="./img/snorpheus.png" height="100%" alt="snorpheus">`,
    `<img src="./img/APTestScores.png" height="100%" alt="ap">`
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

refreshAnimationTime = 500;
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
    var projectsPage = document.getElementById("projects");
    var des = document.getElementById("projectDes");
    var dis = document.getElementById("projectDis");
    des.innerHTML = des.innerHTML = descriptions[0];
    dis.innerHTML = dis.innerHTML = displays[0];
    projectsPage.classList.remove("appeared");
    void projectsPage.offsetTop;
    projectsPage.classList.add("appeared");
}

// skills page skills page // skills page skills page // skills page skills page
var skills = document.getElementsByClassName("skills");
for (let each of skills) {
    let img = each.getElementsByTagName("img")[0];
    let div = each.getElementsByTagName("div")[0];
    each.addEventListener("mouseover", ()=>{
        each.classList.remove("skillImageUnhovered");
        each.classList.remove("skillImageChangesColor");
        div.classList.remove("skillNameChangesColor");
        void each.offsetTop;
        each.classList.add("skillImageChangesColor");
        div.classList.add("skillNameChangesColor");
    });
    each.addEventListener("mouseout", ()=>{
        each.classList.remove("skillImageUnhovered");
        void each.offsetTop;
        each.classList.add("skillImageUnhovered");
    })
}

function displaySkillsPage() {
    var skillsPage = document.getElementById("skills");
    skillsPage.classList.remove("appeared");
    void skillsPage.offsetTop;
    skillsPage.classList.add("appeared");
}
