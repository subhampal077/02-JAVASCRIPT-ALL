
//  FORM EVENT AND EVENT OBJECT IN JS  //


const usernameInput = document.querySelector("#username");

//click event
usernameInput.addEventListener("click", ()=>{
    console.log("input clicked");
});

const p = document.querySelector("p");

// input event
usernameInput.addEventListener("input", (event)=>{
    // console.log("input event fired");
    console.log(event.type);
    console.log(event.target.value);

    p.innerText = event.target.value;  // to view typed inputs in <p> tag
});

// change event  (when we click outside of input tag after changing the input then change event will fire)
usernameInput.addEventListener("change", (e)=> {
    console.log(e.type);
    console.log(e.target.value);
});

// when we clicked on input that called focus event and when we click outside of input that is called blur event
usernameInput.addEventListener("focus", (e)=> {
    console.log(e.type);
});
usernameInput.addEventListener("blur", (e)=> {
    console.log(e.type);
    // console.log(e);
});

// ------------------------------------------ //

// here when i click on children, parents's event also fired // we can prevent it using bubbling & capturing (will do in next chapter )


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    // e.preventDefault();  // to prevent default submit event behavior of form
    console.log("form submitted");
});


form.addEventListener("click", (e)=>{
    console.log(e.target);
    console.log(e);   // similar to (e.currentTarget)
})

