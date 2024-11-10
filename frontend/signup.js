const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");

  if (password1 === password2) {
    return true;
  } else return false;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);


  const div = document.querySelector("#info");
  
  if (checkPassword()) {
    //div.innerText="success";
    //div.style.color = "blue";
    alert("signup was successful")
    window.location.pathname="/login.html";
    const res = await fetch("/signup", {
      method: "post",
      body: formData,
    });
  } else {
    
    div.innerText = "password not matching";
    div.style.color = "red";
  }
};

form.addEventListener("submit", handleSubmit);