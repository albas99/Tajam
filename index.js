menuToggle = () => {
    let nav = document.getElementById("navbar");

    if (nav.classList.contains('navbar')) {
        nav.classList.add('navbar-out');
        nav.classList.remove('navbar');
    } else {
        nav.classList.remove('navbar-out');
        nav.classList.add('navbar');
    }
}

videoPopUp = () =>{
    window.open("https://www.youtube.com/watch?v=KvUgaHTNit4&ab_channel=NikitaKataev");
}