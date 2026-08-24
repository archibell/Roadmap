/* 
In browser JavaScript, the browser gives you a value called document. It represents the current page.
  - You can use document.querySelector to find an element on the page:
*/ 
const button = document.querySelector("#show-task");
/* 
The string "#message" is a selector. A selector tells the browser what to find. #message means "find the element with id="message"." 
*/
const message = document.querySelector("#message");
/*
Events run code later:
  - Webpages are interactive because users click buttons, type into inputs, submit forms, or scroll. These actions are events.
  - To run code when an event happens, use addEventListener.
  - Read this as: find the button, then run this function when the button is clicked.
  - The function passed to addEventListener is a callback. You learned callbacks when you used array methods like map and filter. The difference here is timing. An event listener callback does not run immediately. It runs later, when the event happens.
*/
button.addEventListener("click", () => {
  /* 
  Once you have an element, change its text with textContent.
    - This changes the visible text inside the element.
    - This feels familiar. Earlier, you changed object properties with dot notation. DOM elements are objects too. message.textContent = "Task selected" changes a property on the element object, and the browser updates what the user sees.
  */
  message.textContent = "Write the browser lesson";
  console.log(message.textContent);
});

/*
For forms, you usually listen for the "submit" event:
  - The event parameter receives an event object. That object contains details about what happened.
  - event.preventDefault() stops the browser's default form behavior. Without it, the browser submits the form using its default behavior, which often reloads or navigates away from the current page. That default behavior is useful for traditional websites, but it gets in the way when JavaScript handles the form on the current page.
  - After event.preventDefault(), the code reads input.value and puts that text into message.textContent.
*/
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
form.addEventListener("submit", (event) => {
  /*
  Forms usually need preventDefault - When JavaScript handles a form submit, you usually call event.preventDefault() first. This keeps the page from reloading before your JavaScript can update it.
  */
  event.preventDefault();
  message.textContent = input.value;
  console.log(message.textContent);  
});


