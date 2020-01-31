var phone = document.querySelector('#inputphone');
var pass = document.querySelector('#inputPassword');
var errorPh = document.querySelector('#error-phone');
var errorPas = document.querySelector('#error-pass');
  function val(){
    errorPh.style.display='none';
    errorPas.style.display='none';
    phone.style.border='none';
      if (phone.value.length <= 10 || isNaN(phone.value)){
        phone.focus();
        phone.style.border='1px solid red';
          errorPh.style.display='block';
          return false ;
          

      }
      if (pass.value.length <= 8 ){
        pass.focus();
        pass.style.border='1px solid red';
        errorPas.style.display='block';
        return false ;

    }
    alert('تم تسجيل الدخول بنجاح') 
    return true;

      
  }
  