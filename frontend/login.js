const form = document.querySelector("#login-form");

//let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  accessToken = data.access_token;
  window.localStorage.setItem('token', accessToken);
  //window.sessionStorage.setItem('token', accessToken);
  alert('login successful');

  window.location.pathname = "/";

//   const infoDiv = document.querySelector("#info");
//   infoDiv.innerText = "login successful";

//   window.location.pathname = "/";

//   const btn = document.createElement("button");
//   btn.innerText = "bring items";
//   btn.addEventListener("click", async () => {
//     const res = await fetch("/items", {
//         headers:{
//             Authorization: `Bearer ${accessToken}`
//         }
//     });
//     const data = await res.json();
//     console.log(data);
//   });
//   infoDiv.appendChild(btn);

};

form.addEventListener("submit", handleSubmit);
