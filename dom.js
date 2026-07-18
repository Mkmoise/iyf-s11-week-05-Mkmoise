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

/*Task 9.2 */
const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);

// Children
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

console.log(navLinks);

// Practice

const headerElement = document.getElementById("main-header");
console.log(headerElement.querySelector("nav"));

const firstNav = document.querySelector(".nav-link");
console.log(firstNav.parentElement);

console.log(article.nextElementSibling);

const ul = document.querySelector("ul");
console.log(ul.children);

const footer = document.querySelector("footer");
console.log(footer.parentElement);

/*practice asynchronous  */
function great(name){
    console.log("Hello" +name);
}
function welcome (callback){
    console.log("Moise");
}
welcome (great);