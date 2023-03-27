const buttonRef = document.querySelector('button')

function alertUser(){
    alert('you clicked')
}
buttonRef.addEventListener('click',alertUser)