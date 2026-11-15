let p = document.querySelector("#trigger");

p.addEventListener("mouseover", function(evt) {
    document.querySelector("#target").setAttribute("src", "img/picB.jpg");
})

p.addEventListener("mouseout", function(evt) {
    document.querySelector("#target").setAttribute("src", "img/picA.jpg");
})