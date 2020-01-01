var navButtons = document.getElementsByClassName("navButton");
for (let each of navButtons) {
    console.log(each);
    var a = document.getElementsByClassName("selected");
    each.addEventListener("click", ()=>{
        a[0].classList.remove("selected");
        each.classList.add("selected");
    })
}
