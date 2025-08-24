document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 0123456789;
  const pinNumber = 1234;
  const mobileNumberValue = document.getElementById("phn-number").value;
  const pinNumberValue = document.getElementById("pin-number").value;
  const finalMobileNumberValue = parseInt(mobileNumberValue);
  const finalPinNumberValue = parseInt(pinNumberValue);

  if (
    finalMobileNumberValue === mobileNumber &&
    finalPinNumberValue === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }
});
