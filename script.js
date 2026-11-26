const tombol = document.getElementById("tombol");

tombol.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - tombol.offsetWidth);
    let y = Math.random() * (window.innerHeight - tombol.offsetHeight);

    tombol.style.left = x + "px";
    tombol.style.top = y + "px";
});