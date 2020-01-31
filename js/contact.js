function val(event){
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phoneno').value;
    var msgheader = document.querySelector('#messageheader').value;
    var msg = document.querySelector('#message').value;
    var error = document.querySelector('#error');
    document.querySelector('#name').style.backgroundColor='rgb(238, 237, 237)';
    document.querySelector('#email').style.backgroundColor='rgb(238, 237, 237)';
    document.querySelector('#phoneno').style.backgroundColor='rgb(238, 237, 237)';
    document.querySelector('#messageheader').style.backgroundColor='rgb(238, 237, 237)';
    document.querySelector('#message').style.backgroundColor='rgb(238, 237, 237)';
    
    
    
    if (name.length < 5) {
        document.querySelector('#name').style.backgroundColor='#FFC4C4';
        error.style.padding = '10px';
         error.innerHTML="من فضلك أدخل الاسم أكبر من 5 حروف";
         return false ;
     }
     if (email.length < 3 || email.indexOf('@')== -1) {
        document.querySelector('#email').style.backgroundColor='#FFC4C4';
         
        error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل البريد الالكتروني بشكل صحيح";
        
        return false ;
    }
    if (isNaN(phone) || phone.length <= 10  ) {
        document.querySelector('#phoneno').style.backgroundColor='#FFC4C4';
        error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل رقم الهاتف بشكل صحيح";
        return false ;
    }
    if(msgheader.length <2){
        document.querySelector('#messageheader').style.backgroundColor='#FFC4C4';
        error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل عنوان الرسالة بشكل صحيح";
        return false ;

    }
    if (msg.length <= 50) {

        document.querySelector('#message').style.backgroundColor='#FFC4C4';
        error.style.padding = '10px';
        error.innerHTML="من فضلك يجب أن تكون الرسالة أكبر من 50 حرف ";
        return false ;
    }
    
    alert('تم ارسال طلبك بنجاح سيتم التواصل معك لاحقا');
    
    
   

    return true;
    
    
    

}

