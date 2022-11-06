
const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

  const {
    elements: { email, password },
  } = event.currentTarget;
	
  const user Details = { email:email.value, password:password.value};

    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled!')
    }
        

  console.log(userDetails);
  event.currentTarget.reset();
}
