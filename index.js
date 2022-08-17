function scuberGreetingForFeet(feet){
// pass the parameter-feet
  // Write your code here!
  if(feet <= 400){
    return 'This one is on me!';
  }
  else if ( feet >= 2000){
    if (feet > 2500){
      return 'No can do.';
    }
    return 'I will gladly take your thirty bucks.';
  } 
}
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? "Ok, sounds good." :"No go."


}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "not as generous":
    return "Thank you.";
    case "generous":
      return "Thank you so much.";
      default:
        return "Bye.";
  }

}