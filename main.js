/*=========================toggle icon navbar=========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*========================= typed js =========================*/
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Devops Geek', 'Learner'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})

/*========================= scroll section active link =========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;

    let offset = sec.offsetTop - 150;
    // console.log(top , sec.offsetTop,offset);
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*========================= sticky navbar =========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================= remove toggle icon and navbar =========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*========================= scroll reveal =========================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});


ScrollReveal().reveal('.home-content heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal(' .about-content .progress-bars', { origin: 'right' });



/*========================= Contact section =========================*/

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault() // Prevent form submission

    // Get the form input values
    const fullName = document.getElementById('fullName').value
    const emailAddress = document.getElementById('emailAddress').value
    const mobileNumber = document.getElementById('mobileNumber').value
    const emailSubject = document.getElementById('emailSubject').value
    const messageBody = document.getElementById('messageBody').value

    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(
      `Name: ${fullName}\n\nPhone No: ${mobileNumber}\nMessage: ${messageBody}`
    )}`

    // Open the user's email client
    window.open(mailtoLink)
  })