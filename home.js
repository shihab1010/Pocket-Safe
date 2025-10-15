const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  const currentUserName = currentUser.name;
  document.getElementById("current-user-name").innerText = currentUserName;
  window.validPin = parseInt(currentUser.pin);
} else {
  window.location.href = "./index.html";
}
console.log(validPin);

const validCoupon = "a123";
const tranjactionCOntainer = [];

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
  const innertext = document.getElementById(id).innerText;
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

// add Money

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

    const data = {
      name: "Add Money",
      time: new Date().toLocaleTimeString(),
    };
    tranjactionCOntainer.push(data);
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
    const data = {
      name: "CashOut",
      time: new Date().toLocaleTimeString(),
    };
    tranjactionCOntainer.push(data);
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
    const data = {
      name: "Transfer Money",
      time: new Date().toLocaleTimeString(),
    };
    tranjactionCOntainer.push(data);
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
  const data = {
    name: "Get Bonus",
    time: new Date().toLocaleTimeString(),
  };
  tranjactionCOntainer.push(data);
});

// pay Bill
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
  const data = {
    name: "Pay Bill",
    time: new Date().toLocaleTimeString(),
  };
  tranjactionCOntainer.push(data);
});
// Transactions
document.getElementById("tranjactions").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("transactions-div").innerText = "";
  for (const tranjaction of tranjactionCOntainer) {
    const div = document.createElement("div");
    div.innerHTML = `
   <div
            class="flex items-center justify-between mt-1 w-96 bg-white rounded-xl shadow-md px-5 py-4 border border-gray-200"
          >
            <div>
              <h2 class="text-gray-900 font-semibold text-lg">
               ${tranjaction.name}
              </h2>
              <p class="text-gray-500 text-sm"> ${tranjaction.time}</p>
            </div>
          </div>
   `;
    document.getElementById("transactions-div").appendChild(div);
  }
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
// for tranjactions
document.getElementById("tranjactions").addEventListener("click", function () {
  toggoleFeature("tranjactions", "tranjactions-forms");
});

// log out
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
