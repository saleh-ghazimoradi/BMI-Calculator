"use strict";

document.querySelector(".btn").addEventListener("click", function () {
  const firsName = document.querySelector(".name").value;
  const age = Number(document.querySelector(".age").value);
  const weight = Number(document.querySelector(".weight").value);
  const height = Number(document.querySelector(".height").value);
  const BMI = (weight / height ** 2) * 10000;
  const fixedBMI = BMI.toFixed(2);
  if (fixedBMI <= 18.5) {
    if (age === 1) {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} year old with the BMI of ${fixedBMI}. You should gain weight, I guess `;
    } else {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} years old with the BMI of ${fixedBMI}. You should gain weight, I guess `;
    }
  } else if (fixedBMI > 18.5 && fixedBMI <= 24.9) {
    if (age === 1) {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} year old with the BMI of ${fixedBMI}. You are in shape.`;
    } else {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} years old with the BMI of ${fixedBMI}. You are in shape.`;
    }
  } else if (fixedBMI >= 25 && fixedBMI <= 29.9) {
    if (age === 1) {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} year old with the BMI of ${fixedBMI}. You are overwieght and you've gotta go on a diet.`;
    } else {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} years old with the BMI of ${fixedBMI}. You are overwieght and you've gotta go on a diet.`;
    }
  } else if (fixedBMI >= 30) {
    if (age === 1) {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} year old with the BMI of ${fixedBMI}. You are obese and you've gotta go on a diet ASAP.`;
    } else {
      document.querySelector(
        ".result"
      ).textContent = `Dear ${firsName}, you are ${age} years old with the BMI of ${fixedBMI}. You are obese and you've gotta go on a diet ASAP.`;
    }
  } else {
    document.querySelector(".result").textContent = `No Info Recieved`;
  }
});
