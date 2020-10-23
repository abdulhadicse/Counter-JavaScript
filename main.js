let counter= 0;

document.querySelector('#inc').addEventListener('click', function(){
    counter++;
    document.querySelector('#value').innerText = counter;
})

document.querySelector('#res').addEventListener('click', function(){ 
    counter=0;   
    document.querySelector('#value').innerText = counter;
})

document.querySelector('#des').addEventListener('click', function(){  
    counter--;  
    document.querySelector('#value').innerText = counter;
})