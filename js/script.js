// open menu in mobile screen
const openMenu = document.querySelector(".fa-list");
const navbarnav = document.querySelector(".navbar-nav");

openMenu.addEventListener("click", () => {
    navbarnav.classList.toggle("active")
});
// Close the menu when clicking anywhere else on the page.
document.addEventListener("click", (event) => {
    if (!navbarnav.contains(event.target) && !openMenu.contains(event.target)) {
        navbarnav.classList.remove("active");
    }
});
// underLine in Header
const items = document.querySelectorAll(".navbar-nav .nav-item");
items[0].classList.add("active");
items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach((i) => { i.classList.remove("active"); })
        item.classList.add("active");
    });
});
// part send the message
emailjs.init("AvwJlNK_QIbAd45bs");

const form = document.getElementById('contact-form');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    submit.disabled = true;
    if (userName.value === "" || userEmail.value === "" || message.value === "") {
        Swal.fire({
            icon: "warning",
            title: "All fields are required",
            text: "Please fill in all the fields."
        });
        submit.disabled = false;
        return;
    }

    emailjs.sendForm('service_q4mkqnb', 'template_z15igyc', form)
        .then(function () {
            Swal.fire({
                title: "Your message has been sent successfully!",
                icon: "success",
                draggable: true
            });
            userName.value = "";
            userEmail.value = "";
            message.value = "";
            submit.disabled = false;
        }, function () {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            submit.disabled = false;
        });
});

// animation the website
window.addEventListener("scroll", () => {
    const scrollContents = document.querySelectorAll(".scroll-content"); 
    const screenPosition = window.innerHeight;

    scrollContents.forEach(content => {
        const contentPosition = content.getBoundingClientRect().top;

        if (contentPosition < screenPosition) {
            content.classList.add("visible");
        }
    });
});
