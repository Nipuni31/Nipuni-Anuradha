function validateForm() {
   
    var username = document.forms["form"]["username"].value;
    var password = document.forms["form"]["password"].value;
    var name = document.forms["form"]["name"].value;
    var address = document.forms["form"]["address"].value;
    var zipcode = document.forms["form"]["zipcode"].value;
    var email = document.forms["form"]["email"].value;
    var gender = document.forms["form"]["sex"].value;
    var country = document.forms["form"]["Country"].value;
    var language = document.forms["form"]["language"].value;
    var about = document.forms["form"]["about"].value;
  
    if (username == "") {
      document.getElementById("usernameErr").innerHTML = "Username is required";
      return false;
    }
    if (password == "") {
      document.getElementById("passwordErr").innerHTML = "Password is required";
      return false;
    }
    if (name == "") {
      document.getElementById("nameErr").innerHTML = "Name is required";
      return false;
    }
    if (address == "") {
      document.getElementById("addressErr").innerHTML = "Address is required";
      return false;
    }
    if (zipcode == "") {
      document.getElementById("zipcodeErr").innerHTML = "Zip code is required";
      return false;
    }
    if (email == "") {
      document.getElementById("emailErr").innerHTML = "Email is required";
      return false;
    }
    if (gender == "") {
      document.getElementById("genderErr").innerHTML = "Gender is required";
      return false;
    }
    if (country == "Default") {
      document.getElementById("countryErr").innerHTML = "Country is required";
      return false;
    }
    if (language == "") {
      document.getElementById("languageErr").innerHTML = "Language is required";
      return false;
    }
    if (about == "") {
      document.getElementById("aboutErr").innerHTML = "About is required";
      return false;
    }
  }
  