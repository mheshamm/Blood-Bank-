function city1() {
    var govern = document.querySelector('#govern');
    var city = document.querySelector('#city');
    var value = govern.options[govern.selectedIndex].value;

    if (value === '1') {
        city.innerHTML = `<option >مدينة نصر</option>
                        <option value="2">التجمع الخامس</option>
                        <option value="3">وسط البلد </option>
                        <option value="4">الزمالك</option>
                        <option value="5">رمسيس</option>
                        <option value="6">أكتوبر</option>
                        <option value="7">شبرا</option>
          
          `
    }
    if (value === '2') {
        city.innerHTML = `<option value="1" >المنصورة</option>
                        <option value="2">السنبلاوين</option>
                        <option value="3">ميت غمر </option>
                        <option value="4">أجا</option>
                        <option value="5">بلقاس</option>
                        <option value="6">جمصه</option>
          
          `
    }
    if (value === '3') {
        city.innerHTML = `<option value="1" >محطة الرمل</option>
                        <option value="2">سيدي جابر</option>
                        <option value="3"> سيدي بشر </option>
                        <option value="4">المنتزه</option>
                        <option value="5">الشاطبي</option>
                        <option value="6">المعمورة</option>
          
          `
    }
    if (value === '4') {
        city.innerHTML = `<option value="1" >الأربعين</option>
                        
          
          `
    }
    if (value === '5') {
        city.innerHTML = `<option value="1" >النوبة</option>
                        <option value="2">السد العالي</option>
                        <option value="3">معبد فيلة  </option>
                        
          
          `
    }
    if (value === '6') {
        city.innerHTML = `<option value="1" >طنطا</option>
                        <option value="2">المحلة</option>
                        <option value="3">السنطة  </option>
                        <option value="4">سمنود</option>
                        <option value="5">بسيون</option>
                        <option value="6">كفر الزيات</option>
          
          `
    }
    if (value === '7') {
        city.innerHTML = `<option value="1" >الزقازيق</option>
                        <option value="2">ديرب نجم</option>
                        <option value="3">العاشر من رمضان </option>
                        <option value="4">بلبيس</option>
                        <option value="5">فاقوس</option>
                        <option value="6">ابو كبير</option>
          
          `
    }
    if (value === '8') {
        city.innerHTML = `<option value="1" >شبين الكوم</option>
                        <option value="2">قويسنا</option>
                        <option value="3"> منوف </option>
                        <option value="4">تلا</option>
                        <option value="5">الباجور</option>
                        <option value="6">اشمون</option>
          
          `
    }
}


  function val(){
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var blood = document.querySelector('#bloodtype');
    var govern = document.querySelector('#govern');
    var phone = document.querySelector('#phonenumber');
    var pass = document.querySelector('#inputPassword');
    var pass1 = document.querySelector('#inputPassword1');
    var error = document.querySelector('#error');
    var date = document.querySelector('#datepicker');
    name.style.backgroundColor='#ECECEC';
    email.style.backgroundColor='#ECECEC';
    blood.style.backgroundColor='#ECECEC';
    govern.style.backgroundColor='#ECECEC';
    phone.style.backgroundColor='#ECECEC';
    pass.style.backgroundColor='#ECECEC';
    pass1.style.backgroundColor='#ECECEC';
    date.style.backgroundColor='#ECECEC';
    
    
    if (name.value.length < 5) {
        name.focus();
        name.style.backgroundColor='#FFC4C4';
        error.style.padding = '10px';
         error.innerHTML="من فضلك أدخل الاسم أكبر من 5 حروف";
         return false ;
     }
     if (email.value.length < 3 || email.value.indexOf('@')== -1) {
         email.focus();
        email.style.backgroundColor='#FFC4C4';
        error.style.padding = '10px';
         error.innerHTML="من فضلك أدخل البريد الالكتروني بشكل سليم ";
         return false ;
     }
     if ( date.value.length === 0 ) {
        date.focus();
       date.style.backgroundColor='#FFC4C4';
       error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل تاريخ ميلادك   ";
        return false ;
    }
    
     if (blood.value.length > 3 || blood.value.length === 0 ) {
        blood.focus();
       blood.style.backgroundColor='#FFC4C4';
       error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل فصيلة الدم بدون الظغط علي زر المسافة   ";
        return false ;
    }
     if (govern.options[govern.selectedIndex].value ==='0') {
        govern.focus();
       govern.style.backgroundColor='#FFC4C4';
       error.style.padding = '10px';
        error.innerHTML="من فضلك أختر المحافظة   ";
        return false ;
    }
    
    if (phone.value.length <= 10 || isNaN(phone.value)) {
        phone.focus();
       phone.style.backgroundColor='#FFC4C4';
       error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل رقم الهاتف   ";
        return false ;
    }
    if (pass.value.length < 8 ) {
        pass.focus();
       pass.style.backgroundColor='#FFC4C4';
       error.style.padding = '10px';
        error.innerHTML="من فضلك أدخل كلمة السر بحد أدني 8 حروف   ";
        return false ;
    }
    if ( pass1.value != pass.value ||pass1.value.length <8 ) {
        pass1.focus();
       pass1.style.backgroundColor='#FFC4C4';
       error.style.padding = '10px';
        error.innerHTML="لا تتوافق كلمة السر مع التأكيد   ";
        return false ;
    }
    
     
     
    alert('تم التسجيل بنجاح') 
    return true;

      
  }
$(function () {
    $("#datepicker").datepicker();

});
$(function () {
    $("#datepicker1").datepicker();

});

