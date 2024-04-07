function storeData(event) {
    event.preventDefault(); // prevent the form from submitting normally
  
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const message=document.getElementById("message").value;

      if (fname === "" || lname === "" || emailAddress === "") {
          alert("Please fill out all required fields.");
          return false;
        }
  
      // Store form data in local storage
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("emailAddress",emailAddress);
      localStorage.setItem("message",message);
  
  
    console.log("---------------------------------------------------------------")
    console.log(`Name: ${fname} ${lname}`)
    console.log(`Email Address: ${emailAddress}`)
    console.log(`Message: ${message}`)
    console.log("----------------------------------------------------------------")
  
    alert("Submission Successful")
    }  