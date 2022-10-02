// const hvitFluesoppImage = document.querySelector(".info-hvit-fluesopp")
// const grønnFluesoppImage = document.querySelector(".info-grønn-fluesopp")
// const spissGiftslørsoppImage = document.querySelector(".info-spiss-giftslørsopp")
// const buttGiftslørsoppImage = document.querySelector(".info-butt-giftslørsopp")



// const url = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed";


// async function getPosts() {
//     const response = await fetch(url);
//     const posts = await response.json();

//     function createHtml(){
//         hvitFluesoppImage.innerHTML += `<div
//                                 <img class="post-image" src="${posts._embedded?.["wp:featuredmedia"]?.[0].source_url}" />
//                                 <a href="specific.html?id=${posts.id}"<p>Les mer</p></a>
//                                 </div>`;

                                

//     };
//     createHtml()

// }

// getPosts(url)


const form = document.querySelector(".contact-form");

const customerName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");

function validateForm() {
    event.preventDefault();

    if (validateLength(customerName.value, 5)) {
        nameError.style.display = "none"
    } else {
        nameError.style.display = "block"
    }

    if (validateLength(message.value, 25)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (validateLength(subject.value, 15)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) && validateLength(email.value, 0)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm)

function displayMessage() {
    
    if (validateForm == true) {
    form.innerHTML = ""
        form.innerHTML += `<h1>Thanks for contacting us!</h2>
                            <p>We'll be in touch</p>`
    }
    else(displayError('Vi hadde et problem'))
};



function validateLength(input, len) {
    if (input.trim().length > len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternmatches = regEx.test(email);
    return patternmatches;
}