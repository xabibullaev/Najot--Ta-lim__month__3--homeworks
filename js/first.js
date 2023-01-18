let student = +prompt("Enter your points!");
if (student <= 80) {
  alert("you have not entered to our university");
} else if (student <= 100) {
  alert("You won super contract");
  let cash = +prompt(
    "the super contract of our university is 3000$. Enter your cash"
  );
  if (cash >= 3000) {
    let resultcash = cash - 3000,
      result = `You have entered to our university by super contract! ${resultcash}$ now your cash after paying`;
    alert(result);
  } else if (cash < 3000) {
    let resultcash = cash - 3000,
      result = `You have not entered to our university! Because you have not got enough money! Your cash  ${resultcash}`;
    alert(result);
  }
} else if (student <= 130) {
  alert("You have entered to our university by contract!");
  let cash = +prompt(
    "the contract of our university is 2000$. Enter your cash"
  );
  if (cash >= 2000) {
    let resultcash = cash - 2000,
      result = `You have entered to our university by contract!  ${resultcash}$ now your cash after paying`;
    alert(result);
  } else if (cash < 2000) {
    let resultcash = cash - 2000,
      result = `You have not entered to our university! Because you have not got enough money! Your cash ${resultcash}`;
    alert(result);
  }
} else if (student <= 180) {
  alert("You have won scolarship!");
} else {
  alert("Error!");
}
