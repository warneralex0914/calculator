const add = function(number1, number2) {
  return number1 + number2;
};
const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};
$(document).ready(function()  {
 $("form#add").submit(function(event)  {
   event.preventDefault();
   const number1 = parseInt($("#add1").val());
   const number2 = parseInt($("#add2").val());
   alert(add(number1, number2));
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    alert(subtract(number1, number2));
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    alert(multiply(number1, number2));
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("divide2").val());
    alert(divide(number1, number2));
   });
  });
});