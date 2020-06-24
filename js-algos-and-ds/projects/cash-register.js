const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}


function checkCashRegister(price, cash, cid) {

  // Converting cid in an object for easier access and calculating the sum
  let cidSum = 0;
  let cidUnits = {};
  cid.forEach(elem => {
    cidUnits[elem[0]] = elem[1] * 100;
    cidSum += elem[1] * 100;
  });


  // The change Sum we need to return
  let changeSum = cash * 100 - price * 100;
  let change = [];
  let changeRecord = {};
  console.log(changeSum);
  console.log(cidSum);
  if (changeSum - cidSum > 0) {
    changeRecord["status"] = "INSUFFICIENT_FUNDS";
    changeRecord["change"] = change;
    return changeRecord;
  } else if (changeSum == cidSum) {
    changeRecord["status"] = "CLOSED";
    changeRecord["change"] = cid;
  }

  changeRecord["status"] = "OPEN";

  // Calculating the change currency units
  let allUnits = Object.keys(currencyUnit).reverse();
  let i = 0;
  let curr;
  let currSum = 0;
  while (changeSum > 0) {
    curr = allUnits[i];
    if (changeSum >= currencyUnit[curr] && cidUnits[curr] > 0) {
      currSum += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      cidUnits[curr] = cidUnits[curr] - currencyUnit[curr];
    } else {
      if (currSum > 0) {
        change.push([curr, currSum]);
      }
      i++;
      currSum = 0.0;
    }
  }
  if (currSum > 0) {
    change.push([curr, currSum]);
  }
  change.map(elem => elem[1] /= 100);
  changeRecord["change"] = change;
  return changeRecord;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));