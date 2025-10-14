// get value as INT
function getValueInt(id) {
  const inputFieldValue = parseInt(document.getElementById(id).value);
  return inputFieldValue;
}

// get value as String
function getValueString(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

// handle sign Up
document.addEventListener("DOMContentLoaded", function () {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  document
    .getElementById("signup-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const userName = getValueString("full-name");
      const phn = getValueInt("phn-number");
      const pin = getValueInt("pinnumber");
      const confirmPin = getValueInt("confirm-pin-number");
      const existingUser = users.find((user) => user.phn === phn);

      if (existingUser) {
        alert("An account with this phone number already exists!");
        return;
      }

      if (pin === confirmPin) {
        const data = {
          name: userName,
          phn: phn,
          pin: pin,
          signIn: true,
        };
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign Up Successful!");
        window.location.href = "./index.html";
      } else {
        alert("PIN doesn't match. Try again!");
      }
    });
});

// login authorization
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const mobileNumberValue = document.getElementById("phn-number").value;
      const pinNumberValue = document.getElementById("pin-number").value;
      const finalMobileNumberValue = parseInt(mobileNumberValue);
      const finalPinNumberValue = parseInt(pinNumberValue);
      const matchedUser = users.find(
        (user) =>
          user.phn === finalMobileNumberValue &&
          user.pin === finalPinNumberValue
      );

      if (matchedUser) {
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        alert(`Welcome, ${matchedUser.name}!`);
        window.location.href = "./home.html";
      } else {
        alert("Invalid Credentials");
      }
    });
});
// go to sign up and sign in 
document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.getElementById("sign-up");
  const goToSigninBtn = document.getElementById("go-to-signin");

  if (signUpBtn) {
    signUpBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "./signUp.html";
    });
  }

  if (goToSigninBtn) {
    goToSigninBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "./index.html";
    });
  }
});

