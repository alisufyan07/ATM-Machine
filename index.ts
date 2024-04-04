#! usr/bin/env node

import inquirer from "inquirer";

let balance: number = 20000;
let pin: number = 7209;
let pinAnswer = await inquirer.prompt([
  {
    name: "Pin",
    type: "number",
    message: "enter your pin",
  },
]);
if (pinAnswer.Pin === pin) {
  console.log("correct pin code");
  let operations = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      choices: ["withdraw", "balance inquiry", "fast cash"],
      message: "select an option",
    },
  ]);
  if (operations.options === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter the amount",
      },
    ]);
    if (amountAns.amount <= balance) {
      balance -= amountAns.amount;
      console.log("your current balance is", +balance);
    } else console.log("insufficient balance");
  } else if (operations.options === "balance inquiry") {
    console.log("your current balance is", +balance);
  } else if (operations.options === "fast cash") {
    let fast = await inquirer.prompt([
      {
        name: "FastAmnt",
        type: "list",
        message: "how much amount you want to withdraw",
        choices: ["2000", "5000", "10000", "20000"],
      },
    ]);
    if (fast.FastAmnt === "2000") {
      balance -= fast.FastAmnt;
      console.log("your remaining balance is", +balance);
    }
    if (fast.FastAmnt === "5000") {
      balance -= fast.FastAmnt;
      console.log("your remaining balance is", +balance);
    }
    if (fast.FastAmnt === "10000") {
      balance -= fast.FastAmnt;
      console.log("your remaining balance is", +balance);
    }
    if (fast.FastAmnt === "20000") {
      balance -= fast.FastAmnt;
      console.log("your remaining balance is", +balance);
    }
  }
} else console.log("incorrect pin code");
