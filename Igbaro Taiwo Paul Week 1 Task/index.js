function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;
    const gender = document.forms["myForm"]["gender"].value;
    const password = document.forms["myForm"]["password"].value;

    if (name == "" || email == "" || phone == "" || gender == "" || password == "") {
      alert("All fields must be filled out");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Success message
    alert("Form submitted successfully!");
    return true;
  }