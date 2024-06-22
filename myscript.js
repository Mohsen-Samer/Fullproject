function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    return hasMinLength && hasUppercase ;
}

function validateName(nameee){
    const namepattern = /^[A-Za-z\s]+$/;
    return namepattern.test(nameee)
}

function hideReturn() {
    document.getElementById("returnDate").style.display = "none";
    document.getElementById("returnTime").style.display = "none";
    document.getElementById("return-date-label").style.display="none";
    document.getElementById("return-time-label").style.display="none";
}

function showReturn() {
    document.getElementById("returnDate").style.display ="inline-block";
    document.getElementById("returnTime").style.display ="inline-block";
    document.getElementById("return-date-label").style.display ="inline-block";
    document.getElementById("return-time-label").style.display ="inline-block";
}
function validateBookingForm() {
    let x = document.getElementById("From").value;
    let y = document.getElementById("To").value;
    let num = document.getElementById("input-group1").value;
    let num2 = document.getElementById("input-group2").value;
    let num3 = document.getElementById("input-group3").value;
    /*let pre=document.getElementById("input-group-preffered-1").value;*/
    let Departure=document.getElementById("Departure-Date").value;
    let ReturnDate=document.getElementById("returnDate").value;
    let radiobtn=document.getElementById("radio-button2").checked;
    let DepartureTime=document.getElementById("Departure-time").value;
    let ReturnTime=document.getElementById("returnTime").value;
    let errMeg = "";

    if (x == "From" || y == "To") {
        errMeg += "Please choose both the origin and destination countries\n";
    }
    if (x == y) {
        errMeg += "The Origin and Destination must be different!\n";
    }
    if(Departure>=ReturnDate && radiobtn )
    {
        errMeg += "Please choose the correct Departure and return date\n";
    }
    if(DepartureTime==""){
        errMeg += "Please choose the Departure Time\n";
    } 
    if(ReturnTime=="" && radiobtn){
        errMeg += "Please choose the Return Time\n";
    }
    if (num < 0) {
        errMeg += "Error choosing ticket number for adult\n ";
    }
    if (num2 < 0) {
        errMeg += "Error choosing ticket number for children\n";
    }
    if (num3 < 0) {
        errMeg += "Error choosing ticket number for infant\n";
    }
    if (num == "" && num2 == "" && num3=="") {
        errMeg += "Please choose the amount of tickets\n";
    }
    if (num == "0" && num2 == "0" && num3=="0") {
        errMeg += "Please choose the amount of tickets\n";
    }
    /*if (pre == "") {
        errMeg += "Error Choose Specific Airline \n";
    }
    */
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }
    alert("You Must sign-in First");
    return false;
}
function validateBookingForm2() {
    let x = document.getElementById("From").value;
    let y = document.getElementById("To").value;
    let num = document.getElementById("input-group1").value;
    let num2 = document.getElementById("input-group2").value;
    let num3 = document.getElementById("input-group3").value;
    let pre= document.getElementById("input-group-preffered-1").value;
    let pre2= document.getElementById("input-group-preffered-2").value; 
    let Departure=document.getElementById("Departure-Date").value;
    let ReturnDate=document.getElementById("returnDate").value;
    let radiobtn=document.getElementById("radio-button2").checked;
    let DepartureTime=document.getElementById("Departure-time").value;
    let ReturnTime=document.getElementById("returnTime").value;
    let errMeg = "";

    if (x == "From" || y == "To") {
        errMeg += "Please choose both the origin and destination countries\n";
    }
    if (pre === "") {   
        errMeg += "Please choose preferred airline\n";
    }
    if (pre2 === "") {   
        errMeg += "Please choose preferred airline\n";
    }
    if (x == y) {
        errMeg += "The Origin and Destination must be different!\n";
    }
    if(Departure>=ReturnDate && radiobtn )
    {
        errMeg += "Please choose the correct Departure and return date\n";
    }
    if(DepartureTime==""){
        errMeg += "Please choose the Departure Time\n";
    } 
    if(ReturnTime=="" && radiobtn){
        errMeg += "Please choose the Return Time\n";
    }
    if (num < 0) {
        errMeg += "Error choosing ticket number for adult\n ";
    }
    if (num2 < 0) {
        errMeg += "Error choosing ticket number for children\n";
    }
    if (num3 < 0) {
        errMeg += "Error choosing ticket number for infant\n";
    }
    if (num == "" && num2 == "" && num3=="") {
        errMeg += "Please choose the amount of tickets\n";
    }
    if (num == "0" && num2 == "0" && num3=="0") {
        errMeg += "Please choose the amount of tickets\n";
    }
    /*if (pre == "") {
        errMeg += "Error Choose Specific Airline \n";
    }
    */
    if (errMeg !== "") {
        alert(errMeg);
        return false;
    }
    return true;
}
function validateContact() {
    let nameInput = document.getElementById("input-contact");
    let emailInput = document.getElementById("input-contact-3");
    let phoneInput = document.getElementById("input-contact-2");
    let messageInput = document.getElementById("textarea-contact");

    let reset = true;

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();
    let message = messageInput.value.trim();

    if (name === '') {
        nameInput.placeholder = "Please Enter Your Name";
        reset = false;
    } else if (!validateName(name)) {
        nameInput.value = '';
        nameInput.placeholder = "Please Enter a Valid Name";
        reset = false;
    }

    if (email === '') {
        emailInput.placeholder = "Please Enter Your Email";
        reset = false;
    } else if (!validateEmail(email)) {
        emailInput.value = ''; 
        emailInput.placeholder = "Please Enter a Valid Email";
        reset = false;
    }

    if (phone === '') {
        phoneInput.placeholder = "Please Enter Your Phone";
        reset = false;
    } else if (isNaN(phone)) {
        phoneInput.value = '';
        phoneInput.placeholder = "Please Enter a Valid Phone Number";
        reset = false;
    }

    if (message === '') {
        messageInput.placeholder = "Please Enter Your Message";
        reset = false;
    }

    if (!reset) {
        return false;
    }

    alert("Message sent successfully");
    return true;
}
function validatesignup() {
    let u = document.getElementById("userr");
    let p = document.getElementById("passs");
    let p1 = document.getElementById("pass1");
    let e = document.getElementById("email");

    let resetup = true;


    let username = u.value.trim();
    let password = p.value.trim();
    let confirmPassword = p1.value.trim();
    let email = e.value.trim();

    
    if (username === "") {
        u.placeholder = "Please Enter Your Username";
        resetup = false;
    }

    if (password === "") {
        p.placeholder = "Please Enter Your Password";
        resetup = false;
    } else if (!validatePassword(password)) {
        p.value = '';
        p.placeholder = "Please Enter a Valid Password";
        resetup = false;
    }

    if (confirmPassword === "") {
        p1.placeholder = "Please Enter Your Confirm Password";
        resetup = false;
    } else if (confirmPassword !== password) {
        p1.value = '';
        p1.placeholder = "Passwords do not match";
        resetup = false;
    }

    if (email === "") {
        e.placeholder = "Please Enter Your Email";
        resetup = false;
    } else if (!validateEmail(email)) {
        e.value = '';
        e.placeholder = "Please Enter a Valid Email";
        resetup = false;
    }

    if (resetup) {
        alert("Signed Up Successfully, Welcome " + username + "!");
        return true;
    } else {
        return false;
    }
}

function validatepay() {
    let fn = document.getElementById("full");
    let el = document.getElementById("email");
    let add = document.getElementById("addd");
    let c = document.getElementById("city");
    let st = document.getElementById("state");
    let zip = document.getElementById("code");
    let noc = document.getElementById("nameon");
    let ccn = document.getElementById("ccnn");
    let em = document.getElementById("exmounth");
    let ey = document.getElementById("exy");
    let cvv = document.getElementById("cvcvc");

    let resetup = true;

    let fullName = fn.value.trim();
    let email = el.value.trim();
    let address = add.value.trim();
    let city = c.value.trim();
    let state = st.value.trim();
    let zipCode = zip.value.trim();
    let nameOnCard = noc.value.trim();
    let creditCardNumber = ccn.value.trim();
    let expMonth = em.value.trim();
    let expYear = ey.value.trim();
    let cvvNumber = cvv.value.trim();

    if (!validateName(nameOnCard)) {
        noc.placeholder = "Please Enter a Valid Name on Card";
        resetup = false;
    }

    if (!validateEmail(email)) {
        el.placeholder = "Please Enter a Valid Email";
        resetup = false;
    }

    if (!validateName(fullName)) {
        fn.placeholder = "Please Enter a Valid Name";
        resetup = false;
    }

    if (fullName === "") {
        fn.placeholder = "Please Enter Your Name";
        resetup = false;
    }

    if (email === "") {
        el.placeholder = "Please Enter Your Email";
        resetup = false;
    }

    if (address === "") {
        add.placeholder = "Please Enter Your Address";
        resetup = false;
    }

    if (city === "") {
        c.placeholder = "Please Enter Your City";
        resetup = false;
    }

    if (state === "") {
        st.placeholder = "Please Enter Your State";
        resetup = false;
    }

    if (zipCode === "") {
        zip.placeholder = "Please Enter Zip Code";
        resetup = false;
    }

    if (isNaN(zipCode) || zipCode <= 0) {
        zip.value = '';
        zip.placeholder = "Please Enter Correct Zip Code";
        resetup = false;
    }

    if (creditCardNumber === "") {
        ccn.placeholder = "Please Enter Credit Card Number";
        resetup = false;
    }

    if (isNaN(creditCardNumber) || creditCardNumber <= 0) {
        ccn.value = '';
        ccn.placeholder = "Please Enter Valid Credit Card Number";
        resetup = false;
    }

    if (expMonth === "") {
        em.placeholder = "Please Enter Exp Month";
        resetup = false;
    }

    if (isNaN(expMonth) || expMonth <= 0) {
        em.value = '';
        em.placeholder = "Please Enter Correct Exp Month";
        resetup = false;
    }

    if (expYear === "") {
        ey.placeholder = "Please Enter Exp Year";
        resetup = false;
    }

    if (isNaN(expYear) || expYear <= 0) {
        ey.value = '';
        ey.placeholder = "Please Enter Correct Exp Year";
        resetup = false;
    }

    if (cvvNumber === "") {
        cvv.placeholder = "Please Enter CVV";
        resetup = false;
    }

    if (isNaN(cvvNumber) || cvvNumber <= 0) {
        cvv.value = '';
        cvv.placeholder = "Please Enter Correct CVV";
        resetup = false;
    }

    if (!resetup) {
        return false;
    }

    alert("Payment successfully\nYour ticket number is: 4111\n");
    window.location.href = 'index2';
    return true;
}

function validateMybooking() {
    let x = document.getElementById("input-group1").value;

    if (x == "") {
        document.getElementById("empty-div").innerHTML = "Please Put a Ticket Number!";
        return false;
    }
    if(x!=="4111")
        {
            document.getElementById("empty-div").innerHTML = "Incorrect Ticket Number!";
            return false;
        }
    document.getElementById("empty-div").innerHTML = "";
    window.location.href = 'ticket';
    return false;
}

    function validateMystatus(){
        let x = document.getElementById("input-group1").value;
        if (x === "") 
        {
        document.getElementById("empty-div").innerHTML = "Please Put a Flight Number!";
        return false;
        }
        document.getElementById("empty-div").innerHTML = "";
        return true;
    
}
function validatelogin() {
    let name = document.getElementById("user-name").value;
    let password = document.getElementById("pass-word").value;

    if (name === "" || password === "") {
        alert("Username or password cannot be empty!");
        return false;
    }

    if (name == "admin1" && password == "admin123") {
        alert("Login successfully as Admin! Welcome " + name + "!");
        window.location.href = 'admin1';
        return false; 
    } 
    else 
    {
        return true;
    }
}
function validateadd() {
    let emailInput = document.getElementById("ead");
    let passwordInput = document.getElementById("pad1");

    let resetup = true;

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        emailInput.value = '';
        emailInput.placeholder = "Please Enter a Valid Email";
        resetup = false; 
    }

    if (!validatePassword(password)) {
        passwordInput.value = '';
        passwordInput.placeholder = "Please Enter a Valid Password";
        resetup = false; 
    }

    if (resetup) {
        alert("User Added successfully");
        return true; 
    }
    else
    {
        return false; 
    }
}


function validateEdit() {
    let emailInput = document.getElementById("ead1");
    let passwordInput = document.getElementById("pad2");

    let resetup = true;
    

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        emailInput.value = '';
        emailInput.placeholder = "Please Enter a Valid Email";
        resetup = false;
    }

    if (!validatePassword(password)) {
        passwordInput.value = '';
        passwordInput.placeholder = "Please Enter a Valid Password";
        resetup = false;
    }
    if (resetup) {
        alert("User Edited successfully");
        return true; 
    }
    else
    {
        return false; 
    }
}

function validateRemove(){
    alert("User Removed succesfully")
    
    return true;
}

function validateaddf(){
    alert("Flight Added succesfully")
    
    return true;
}
function validateEditf(){
    alert("Flight Edited succesfully")

    return true;
}
function validateRemovef(){
    alert("Flight Removed succesfully")

    return true;
}
