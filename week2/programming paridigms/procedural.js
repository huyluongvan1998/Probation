const form = document.querySelector('.form-submit');
const MyuserName = document.querySelector('#username');
const Mypassword = document.querySelector('#password');

const greetingUser = (e) => {
        e.preventDefault();

        if(MyuserName.value.trim().length === 0){
           return alert('Fill in Username!');
        }

        if(Mypassword.value.trim().length > 6) {
            return alert('Password must be maximum of 5 letters');
        }
        
        
        
        const user = {
            username: MyuserName.value,
            password: Mypassword.value
        };
        
        console.log(user);
        console.log(`Greeting ${user.username}`);
    }

    form.addEventListener('submit', greetingUser);

   
    

