const form = document.getElementById("form")



const usname = document.getElementById("usname")

const email = document.getElementById("email")

const password = document.getElementById("password")

const cpassword =document.getElementById("cpassword")

const tac = Document.getElementById("tc")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    Validate()
})

function Validate(){
    let nameValue =usname.Value.trim()
    let emailValue =email.Value.trim()
    let passwordValue =password.Value.trim()
    let cpasswordValue =cpassword.Value.trim()
    let tacValue =tac.value

    // user name check

    if(nameValue===" "){
        setError(usname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(usname,'username should be minimum 3 characters')
    }
    else{
        setSuccess(usname)
    }

    // email id checking
    if(emailValue===" "){
        setError(email,'email cannot be empty')
    } 
    else if(!emailCheck(emailValue)){
        setError(email,'Enter valid email')
    }
    else{
        setSuccess(email)
    }

    function emailCheck(input){
        let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let valid = email.test(input)
        return valid
    }

    // password checking
    if(passwordValue===" "){
        setError(password,'paasword cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'password must be 8 characters')
    }
    else{
        setSuccess(password)
    }

    // confirm password
    if(cpasswordValue===" "){
        setError(cpassword,'paasword cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'password not matched')
    }
    else{
        setSuccess(cpassword)
    }

    // Terms and conditions check
    if(!tac.checked){
        setError(tc,'click on agree terms checkbox')
    }
    else{
        setSuccess(tc)
    }
    
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querrySelector('small')
        small.innerText =message
        parent.classList.add('success')
        parent.classList.remove('error')
    }
}