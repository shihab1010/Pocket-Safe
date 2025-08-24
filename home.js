const validPin = 1234;

// add amount

document
  .getElementById("add-ammount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmmount = parseInt(document.getElementById("add-ammount").value);
    const homePinNumber = parseInt(
      document.getElementById("home-pin-number").value
    );

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
    document.getElementById("avail-balance").innerText = newAvailBalance;
    alert("Ammount added succesfully.");
  });

//   cashout
document
  .getElementById("withdraw-ammount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-ammount").value
    );
    const availbalance = parseInt(
      document.getElementById("avail-balance").innerText
    );
    const agentNumber = document.getElementById("agent-number").value;
    const pinNumber = parseInt(document.getElementById("withdraw-pin").value);
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
    document.getElementById("avail-balance").innerText = newAvailBalance;
    alert("Ammount withdraw succesfully.");
  });

//   toggoling section
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("add-money").style.border = "2px solid lightgreen";
  document.getElementById("cash-out").style.border = "";
  document.getElementById("cashout-forms").style.display = "none";
  document.getElementById("add-money-forms").style.display = "block";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("cash-out").style.border = "2px solid lightgreen";
  document.getElementById("add-money").style.border = "";
  document.getElementById("add-money-forms").style.display = "none";
  document.getElementById("cashout-forms").style.display = "block";
});
