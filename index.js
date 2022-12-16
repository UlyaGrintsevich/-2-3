function invalid(e) {
    if (!/PATTERN/.test(e.target.value)) { // somehow validity.valid returns a wrong value
      e.target.setCustomValidity('INVALID')
    } else {
      e.target.setCustomValidity('')
    }
  }
  function TestLogin2(login){
    if(/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(login) === false)
      {alert('Неверный логин'); return false;}
     return true;
    }
     


         
    