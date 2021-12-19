const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const resi0 = document.querySelector('.resi0');
const resi1 = document.querySelector('.resi1');
const resi2 = document.querySelector('.resi2');
const resi3 = document.querySelector('.resi3');
const openMenu = document.querySelector('.openMenu');

 


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
resi0.addEventListener('click',close);
resi1.addEventListener('click',close);
resi2.addEventListener('click',close);
resi3.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '-20px';
}
function close(){
    mainMenu.style.top = '-103%';
    
}
