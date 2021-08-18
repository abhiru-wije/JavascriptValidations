// Emali validation

// Grab the email input field and also the update div below it
// Why: to listen for changes in the input field, and show live updates in the update div!
const email = document.querySelector('.email');
// const update = document.querySelector('.update');

// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)
email.addEventListener('input', inputEmail);

function inputEmail(e) {
  const input = e.target.value;
  // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
  // Why: because we don't want to start validating before the user has started typing; after that it's fair game
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    // email.textContent = 'Valid Email!';
    email.classList.add('success');
    email.classList.remove('failure');
  } else {
    // email.textContent = 'Keep Going...';
    email.classList.remove('success');
    email.classList.add('failure');
  }
}

//normal special charactor validation
const user = document.querySelector('.user');
user.addEventListener('input', inputuser);

function inputuser(e){
    const input = e.target.value;
    
    const minNumberChar = 6;
    const maxNumberChar = 16;
    const regXp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    // console.log(input, ' ', format.test(input));
    if(input.length > minNumberChar && input.length < maxNumberChar && !regXp.test(input)){
        user.classList.add('success');
        user.classList.remove('failure');
    }else {
        user.classList.remove('success');
        user.classList.add('failure');
    }  
}

// only letters validation

const fname = document.querySelector('.fname');
fname.addEventListener('input', numberValidate);

function numberValidate(e){
  const fInput = e.target.value;
  const regXpNew = /^[a-zA-Z]*$/g;

   if(regXpNew.test(fInput)){
     
    //  document.querySelector('.display').style.display = 'none';
     fname.classList.add('success');
     fname.classList.remove('failure');
  }else {
    // document.querySelector('.display').style.display = '';
    fname.classList.remove('success');
        fname.classList.add('failure');
  }
}

// phone number

const cnumber = document.querySelector('.cnumber');
cnumber.addEventListener('input', contactValidate);

function contactValidate (e){
  const cinput = e.target.value;
  const regXpC = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{3,4}?[0-9]{3,4}$/im;
  const regXpNew = /^[a-zA-Z]*$/g;
  const minNumber = 10;
  const maxNumber = 11;

  if(!regXpNew.test(cinput) && regXpC.test(cinput)){
    cnumber.classList.add('success');
    cnumber.classList.remove('failure');
  }else {
    cnumber.classList.remove('success');
    cnumber.classList.add('failure');
  }
}