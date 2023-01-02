function showMenu(param){
    document.querySelector('.burger').style.display = 'none';
    document.querySelector('.close').style.display = 'flex';
    document.querySelector('.menu').style.display = 'flex';
}
function hideMenu(param){
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.burger').style.display = 'flex';
    document.querySelector('.menu').style.display = 'none';
}