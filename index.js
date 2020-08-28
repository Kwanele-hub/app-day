function saveValues(){
    var email = document.getElementById("email").value;
    var cellPhoneNumber = document.getElementById("cellPhoneNumber").value;
    var name = document.getElementById("name").value;
    
    var personalInfo = {name : name, cellPhoneNumber : cellPhoneNumber , email : email}
    localStorage.setItem("personal info" ,  JSON.stringify(personalInfo));
}