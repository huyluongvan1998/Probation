
//impure function
//have to create a one un-pure function for display error
const alertFunc = (error) => {
    alert(error);
} 
// end impure func
//-------------------------------------------------------------

//try to avoid side-effects by creating pure function.

class myUser {
    constructor(username, password){
        this.name = username;
        this.password = password
    }

    greeting = () => {
        console.log(`Greeting ${this.name}`);
    }
}




const getData = () => {
    const form = document.querySelector('.form-submit');
    form.addEventListener('submit', submitHandler);
}

const submitHandler = (event) => {
//use try-catch for handling errors.    
    try {
        const MyuserName = document.querySelector('#username');
        const Mypassword = document.querySelector('#password');
        event.preventDefault();
        username = MyuserName.value;
        password = Mypassword.value;
        validatorData(username, password);  
        const displayUser = new myUser(username, password);
        console.log(displayUser);
        displayUser.greeting();
        
    } catch (error) {
        alertFunc(error.message);
    }

}
//@this is not pure function because of alert
// const validatorData = (username, password) => {
//     if(username.value.trim().length === 0){
           
//         return alert('Fill in Username!');
//      }
     
//      if(password.value.trim().length > 5) {
//          return alert('Password must be maximum of 5 letters');
//      }
// }

const validatorData = (username, password) => {
//by throw new Error can avoid creating side-effect
    if(username.trim().length === 0){
        throw new Error('Fill in Username!');
    }
    if(password.trim().length > 5) {
        throw new Error('Password must be maximum of 5 letters');
    }
}



getData();