let pass = document.getElementById("pass");

// console.log(pass.addEventListener("keypress"));
pass.addEventListener("keyup", function (e) {
  if (pass.value.trim().length >= 1) {
    pass.nextElementSibling.style.display = "grid";
  } else {
    pass.nextElementSibling.style.display = "none";
    console.log(pass.value.length);
  }
});

let form__ = document.getElementById("form");
let submit_btn = document.getElementById("submit_btn");
let u_name = document.querySelector(".username");

u_name.addEventListener("keyup", disable_b);
pass.addEventListener("keyup", disable_b);
disable_b();
function disable_b() {
  if (u_name.value.length > 0 && pass.value.length >= 6) {
    submit_btn.disabled = false;
    submit_btn.style.backgroundColor = "rgb(32, 157, 206)";
  } else {
    submit_btn.disabled = true;
    submit_btn.style.backgroundColor = "rgb(172 216 233)";
  }
}

form__.addEventListener("submit", function (el) {
  el.preventDefault();
  console.log("Detail : ", u_name.value, pass.value);
  // pass.value = ""

  submit_btn.disabled = true;
  submit_btn.value = "Please wait..."
  return false;
});

pass.nextElementSibling.addEventListener("click", function () {
  if (pass.nextElementSibling.textContent === "show") {
    pass.nextElementSibling.textContent = "hide";

    pass.type = "text";
  } else {
    pass.nextElementSibling.textContent = "show";
    pass.type = "password";
  }
});
