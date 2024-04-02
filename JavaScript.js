function storeData(event) {
  event.preventDefault(); // prevent the form from submitting normally

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;

    if (fname === "" || lname === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
      }

    // Store form data in local storage
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email",email);


  console.log("---------------------------------------------------------------")
  console.log(`Name: ${firstname} ${lastname}`)
  console.log(`Email: ${email}`)
  console.log("----------------------------------------------------------------")

  alert("Submission Successful")

  location.href='contact.html';
}