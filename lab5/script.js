$(document).ready(function(){
  $(".form").submit((e)=>{
    e.preventDefault();
    if(!Register()){
      console.log("cc")
      alert("Bạn cần nhập đầy đủ các trường có dấu *")
    }
    checkPass();
    checkNumberPhone();
    
  })
  $(":input").not(":input[type=submit], :input[type=reset]").each(function(){
    $(this).focus(function(){
      $(this).css("background-color", "#FF9")
    }).blur(function(){
      $(this).css("background-color", "#FFF")
    })
  })
})
function Register(){
  $(":input").not(":input[type=submit], :input[type=reset]").each(function(){
    if(!$(this).val().trim()){
      return true;
    }else{
      return false;
    }
  })
}
function checkPass(){
  if($("#password").val().trim().length < 6 || $("#password").val().trim().length > 20){
    return true;
  }else {
    return false;
  }
}
function checkConfirmPass(){
  if($("#password").val().trim()!=$("#confirm-password").val().trim()){
    return true;
  }else {
    return false;
  }
}
function checkNumberPhone(){
  var rg = /^0[0-9]{9,10}$/g;
  var a = $("#phoneNumber").val().trim().match(rg)
  if(!a){
    return true;
  }else{
    return false;
  }
}