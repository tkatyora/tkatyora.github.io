let error = document.getElementsByClassName('error'),
     form = document.forms['form-id'],
     form2 = document.forms['form-id-2'],
     username = document.forms["form"]['username'],
     password = document.forms["form"]['password'],
     show = document.querySelector('#show'),
     input = document.getElementsByClassName('input')
 ;
 console.log(form)
 console.log(form2)
 form.addEventListener('submit',function(e){
    e.preventDefault();
    form.style.zIndex = "0";
    form.style.display = "none";
 })
 form2.addEventListener('submit',()=> form2.style.zIndex = "0")
//  form2.addEventLestener('submit',()=> form2.style.zIndex = "0")
 
