var learnMoreButton = document.getElementById("learnMoreButton");
learnMoreButton.addEventListener("click", (e)=>{
    learnMoreButton.style.display = "none";
    // document.getElementById("about").style.height = "2em";
    document.getElementById("about").classList.add("graduallyShown");
}, false);
