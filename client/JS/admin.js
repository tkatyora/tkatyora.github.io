 let error = document.getElementsByClassName('error'),
     form = document.forms['form-id'],
     username = document.forms["form"]['username'],
     password = document.forms["form"]['password'],
     input = document.getElementsByClassName('input')
 ;
 
 console.log(input)
for(x =0 ;x<input.length;x++){
  error[x].style.display = 'none' ;
}
form.addEventListener('submit',function(e){
  e.preventDefault();
  
  validation();

})

// validation function
  function validation() {
   if(password.value == 2000 && username.value == 'admin'){
    window.location = "B:\\tnc-company-projects\\company-website\\react-website\\html.pages\\admin-dashboard.html";
   }
   else if(password.value == 2000 && username.value != 'admin')
   {
    usernameWrong();
   
   }
   else if(password.value != 2000 && username.value == 'admin')
   {
    error[1].style.display ='block';
    passwordWrong();
   }
   else{
    
    error[0].style.display ='block';
    bothWrong();
   }
   }


   function usernameWrong(){
    error[2].style.display ='block';
    input[0].style.border = '2px red solid';
    input[0].style.backgroundColor = 'red'
   }
   function passwordWrong(){
    error[1].style.display ='block';
    input[1].style.border = '2px red solid';
    
   }
   function bothWrong(){
    error[2].style.display ='block';
    input[0].style.border = '2px red solid';
    input[1].style.border = '2px red solid';
    
   }
  
