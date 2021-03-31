const billAmount = document.querySelector(".bill-amount");
const tipPercentage = document.querySelector(".tip-percentage");
const noPeople = document.querySelector(".noofpeople");
const btn = document.querySelector(".demobtn2");
const h1 = document.querySelector(".result2");

btn.addEventListener("click", tip);
function tip() {
  event.preventDefault();
  var i = Number(billAmount.value);
  var j = Number(tipPercentage.value);
  var k = Number(noPeople.value);
  var l = Number(i * (j / 100));
  var m = Number(i + l);
  var n = Number(l / k);
  h1.innerHTML =
    "Total Tip Amount " +
    "=" +
    l +
    "<br> Total Bill" +
    "=" +
    m +
    "<br> Tip Amount " +
    "<br> <sup>$</sup>" +
    n +
    "<br>each.";
}
