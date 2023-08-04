var ramRate = 70;
var cpuRate = 100;
var storageRate = 10;

// -----------------------------------------

const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");

const total = document.getElementById("total");

function updateValue(slider, value) {
  value.textContent = slider.value;
}

function start() {
  document.getElementById("ramPrice").innerHTML = ramRate;
  document.getElementById("cpuPrice").innerHTML = cpuRate;
  document.getElementById("storagePrice").innerHTML = storageRate;
}

function updateTotal() {
  const totalValue =
    parseInt(value1.textContent) * ramRate +
    parseInt(value2.textContent) * cpuRate +
    parseInt(value3.textContent) * storageRate;
  total.innerHTML = `${totalValue}`;
}

slider1.addEventListener("input", () => {
  updateValue(slider1, value1);
  updateTotal();
});

slider2.addEventListener("input", () => {
  updateValue(slider2, value2);
  updateTotal();
});

slider3.addEventListener("input", () => {
  updateValue(slider3, value3);
  updateTotal();
});
