const validPin = 1234;
const validCoupon = "a123";
//...... reusable function.........

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

// get Inner text

function getInnerText(id) {
  const innertext = document.getElementById("avail-balance").innerText;
  return innertext;
}

// Set Inner text
function setInnerText(value) {
  document.getElementById("avail-balance").innerText = value;
}
// for togolling

// id1=> for card green border
// id2=> for which form show
function toggoleFeature(id1, id2) {
  // green border
  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    card.style.border = "";
  }
  document.getElementById(id1).style.border = "2px solid lightgreen";

  // display none
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id2).style.display = "block";
}

// >>>><<<<<<<<<<<<>>>>>>>>>><<<<<<<<<<<<>>>>>>>>><<<<<<<<

// add amount

document
  .getElementById("add-ammount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getValueString("bank");
    const accountNumber = getValueString("account-number");
    const addAmmount = getValueInt("add-ammount");
    const homePinNumber = getValueInt("home-pin-number");

    if (accountNumber.length < 11) {
      alert("Please give valid account number.");
      return;
    }

    if (homePinNumber !== validPin) {
      alert("PIN is not Correct.");
      return;
    }

    if (addAmmount <= 0) {
      alert("Please give valid ammount.");
      return;
    }
    const availbalance = parseInt(
      document.getElementById("avail-balance").innerText
    );

    const newAvailBalance = availbalance + addAmmount;
    setInnerText(newAvailBalance);
    alert("Ammount added succesfully.");
  });

//   cashout
document
  .getElementById("withdraw-ammount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAmount = getValueInt("withdraw-ammount");
    const availbalance = parseInt(getInnerText("avail-balance"));
    const agentNumber = getValueString("agent-number");
    const pinNumber = getValueInt("withdraw-pin");
    if (agentNumber.length < 11) {
      alert("Please give valid account number.");
      return;
    }

    if (pinNumber !== validPin) {
      alert("PIN is not Correct.");
      return;
    }

    if (withdrawAmount <= 0) {
      alert("Please give valid ammount.");
      return;
    }
    if (availbalance < withdrawAmount) {
      alert("Insufficient balance.");
      return;
    }

    const newAvailBalance = availbalance - withdrawAmount;
    setInnerText(newAvailBalance);
    alert("Ammount withdraw succesfully.");
  });

// transfer money
document
  .getElementById("transfer-ammount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const transferAmount = getValueInt("transfer-ammount");
    const availbalance = parseInt(getInnerText("avail-balance"));
    const userAccountNumber = getValueString("user-account-number");
    const pinNumber = getValueInt("transfer-pin");
    if (userAccountNumber.length < 11) {
      alert("Please give valid account number.");
      return;
    }

    if (pinNumber !== validPin) {
      alert("PIN is not Correct.");
      return;
    }

    if (transferAmount <= 0) {
      alert("Please give valid ammount.");
      return;
    }
    if (availbalance < transferAmount) {
      alert("Insufficient balance.");
      return;
    }

    const newAvailBalance = availbalance - transferAmount;
    setInnerText(newAvailBalance);
    alert("Ammount transfer succesfully.");
  });

// get bonus
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const couponNumber = getValueString("coupon-number");
  if (couponNumber != validCoupon) {
    alert("Coupon is not Correct.");
    return;
  }
  const availbalance = parseInt(getInnerText("avail-balance"));
  const newAvailBalance = availbalance + 100;
  setInnerText(newAvailBalance);
  alert("Bonus added succesfully.");
});

// pay now
document.getElementById("pay-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const billerAccountNumber = getValueString("biller-account-number");
  const payAmount = getValueInt("pay-ammount");
  const payPinNumber = getValueInt("pay-pin-number");
  const availbalance = parseInt(getInnerText("avail-balance"));

  if (billerAccountNumber.length < 11) {
    alert("Please give valid account number.");
    return;
  }

  if (payPinNumber !== validPin) {
    alert("PIN is not Correct.");
    return;
  }

  if (payAmount <= 0) {
    alert("Please give valid ammount.");
    return;
  }
  if (availbalance < payAmount) {
    alert("Insufficient balance.");
    return;
  }

  if (availbalance < payAmount) {
    alert("Insufficient balance.");
    return;
  }

  const newAvailBalance = availbalance - payAmount;
  setInnerText(newAvailBalance);
  alert("Paid succesfully.");
});

//   toggoling section

// for add money
document.getElementById("add-money").addEventListener("click", function () {
  toggoleFeature("add-money", "add-money-forms");
});

// for cash out
document.getElementById("cash-out").addEventListener("click", function () {
  toggoleFeature("cash-out", "cashout-forms");
});

// for transfer money
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    toggoleFeature("transfer-money", "transfer-money-forms");
  });

// for get bonus
document.getElementById("get-bonus").addEventListener("click", function () {
  toggoleFeature("get-bonus", "get-bonus-forms");
});
// for pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  toggoleFeature("pay-bill", "pay-bill-forms");
});
