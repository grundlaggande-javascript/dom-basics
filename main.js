// 1. Log the document object
console.log(document);

// 2. Selecting and modifying elements

// By ID
const title = document.getElementById("main-title");

// By Tag Name
const paragraphs = document.getElementsByTagName("p");

// By Class Name
const textElements = document.getElementsByClassName("text");

// Using querySelector and querySelectorAll
const firstParagraph = document.querySelector(".text");
const allListItems = document.querySelectorAll("li");

// Modifying elements

// Changing the title text
title.textContent = "Updated Title";

// Updating all paragraph texts
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = `Updated Paragraph ${i + 1}`;
}

// 3. Styling elements

// Styling the title
title.style.color = "blue";
title.style.fontSize = "5rem";

// Styling all paragraphs
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "#f0f0f0";
    paragraphs[i].style.padding = "10px";
    paragraphs[i].style.borderRadius = "5px";
}

// 4. Creating and inserting new elements

// Creating a new list item
const newListItem = document.createElement("li");
newListItem.textContent = "List Item 3";

// Inserting the new list item
const ul = document.querySelector("ul");
ul.appendChild(newListItem);

// Creating a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a newly added paragraph.";
newParagraph.className = "text";

// Inserting the new paragraph with insertAdjacentElement("afterend") after the existing paragraphs
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.insertAdjacentElement("afterend", newParagraph);

// 5. Removing elements

// Removing the first list item
const firstListItem = ul.querySelector("li");
firstListItem.remove();