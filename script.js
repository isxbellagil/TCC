// Add event listener to footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        // Add active class to current link
        document.querySelectorAll('.footer-links a').forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});



$(document).ready(function(){
    $('.carousel').carousel();
});
