// getElementById
const header = document.getElementById("main-header");
console.log(header);

// getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log(contents);

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// querySelector
const firstLink = document.querySelector(".nav-link");
console.log(firstLink);

// querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log(allLinks);

// Practice

// 1
const h1 = document.querySelector("h1");

// 2
const allContent = document.querySelectorAll(".content");

// 3
const form = document.getElementById("contact-form");

// 4
const emailInput = document.getElementById("email");

// 5
const navItems = document.querySelectorAll("nav li");

// 6
const firstNavLink = document.querySelector(".nav-link");

// 7
const lastParagraph = document.querySelector("article p:last-of-type");

console.log(h1);
console.log(allContent);
console.log(form);
console.log(emailInput);
console.log(navItems);
console.log(firstNavLink);
console.log(lastParagraph);
