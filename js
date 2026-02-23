const form=document.querySelector('#weather_form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(City.value)
})
