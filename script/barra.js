let box = document.getElementById('box-pes');


function pes(){
    let input = document.getElementById('bar-pes').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('moda');
    box.style.display = 'block'



for(i = 0; i < x.length; i++){

if(!x[i].innerHTML.toLocaleLowerCase().includes(input)){
    x[i].style.display = 'none';

} else {
    x[i].style.display = 'list-item';
};

}

}

function fpes(){
    box.style.display = 'none'
}

function clibar(){
    box.style.display = 'none'    
}