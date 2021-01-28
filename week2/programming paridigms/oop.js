
class myUser {
    constructor(username, password){
        this.name = username;
        this.password = password
    }

    greeting = () => {
        console.log(`Greeting ${this.name}`);
    }
}

class myForm {
    constructor(username, password){
        this.form = document.querySelector('.form-submit');
        //have to use this inside constructor and pass method inside
        //this triggered by event will point to event.target by default 
        //use bind(this) to change it reference to class.
        this.form.addEventListener('submit', this.onSubmit.bind(this))
    }
    
   // method of myForm
   validatorMethod = (username, password) => {
       if(username.trim().length === 0){
           
           return alert('Fill in Username!');
        }
        
        if(password.trim().length > 5) {
            return alert('Password must be maximum of 5 letters');
        }
    };
    
    
    onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const Uname = event.target[0].value;
        console.log(Uname);
        const Upass = event.target[1].value;
        console.log(Upass);
        this.validatorMethod(Uname, Upass);

        const user = new myUser(Uname, Upass);
        console.log(user);
        user.greeting();
    } 
}

new myForm();