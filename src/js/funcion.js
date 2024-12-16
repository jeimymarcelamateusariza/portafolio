window.addEventListener('scroll', function()
{
    const menu = document.querySelector('.navbar');
    menu.classList.toggle("sticky",window.scrollY > 0);
    
})