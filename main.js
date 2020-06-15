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
    top: element.offsetTop + element.offsetParent.offsetTop
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
    scrollTo(document.getElementById("skillsTitle"));
    displaySkillsPage();
})

// DISPLAY PROJECTS // DISPLAY PROJECTS // DISPLAY PROJECTS // DISPLAY PROJECTS

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
    var name = document.getElementById("projectName");
    var des = document.getElementById("projectDes");
    var dis = document.getElementById("projectDis");
    var link = document.getElementById("projectLink");
    name.classList.remove("refreshed");
    des.classList.remove("refreshed");
    dis.classList.remove("refreshed");
    link.classList.remove("refreshed");
    void name.offsetTop;
    void des.offsetTop;         // force DOM to recalculate the elem. Google "reflow"
    void dis.offsetTop;
    void link.offsetTop;
    name.classList.add("refreshed");
    des.classList.add("refreshed");
    dis.classList.add("refreshed");
    link.classList.add("refreshed");
    setTimeout(()=>{name.innerHTML = projects[index].name;}, refreshAnimationTime/2);
    setTimeout(()=>{des.innerHTML = projects[index].description;}, refreshAnimationTime/2);
    setTimeout(()=>{dis.innerHTML = projects[index].display;}, refreshAnimationTime/2);
    setTimeout(()=>{link.href = projects[index].link;}, refreshAnimationTime/2);
}
function displayProjectPage() {
    var projectsPage = document.getElementById("projects");
    var des = document.getElementById("projectDes");
    var dis = document.getElementById("projectDis");
    var name = document.getElementById("projectName");
    var link = document.getElementById("projectLink");
    des.innerHTML = projects[0].description;
    dis.innerHTML = projects[0].display;
    name.innerHTML = projects[0].name;
    link.href = projects[0].link;
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
