const postContainer = document.querySelector(".post-container");
const imageContainer = document.querySelector(".specific-post-image-container");
const body = document.querySelector("body");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


console.log(id);

const baseUrl = "https://eplepaisolutions.no/wp-json/wp/v2/posts/";

const url = "https://eplepaisolutions.no/wp-json/wp/v2/posts/" + id + "?_embed";


console.log(url);


/* Display specific content ant change title */

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);
        document.title = document.title + " - " + `${post.title.rendered}`;
      
        function createHtml() {
            postContainer.innerHTML += `<div>
                                        <h1>${post.title.rendered}</h1>                                                                             
                                        <p class="post-content">${post.content.rendered}</p>                              
                                        </div>`

            imageContainer.innerHTML += `<img class="specific-post-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />`
                                        // <p class="alt-text" src="${post._embedded?.["wp:featuredmedia"]?.alt_text?.srcset}"</p>
                                        // <p class="caption" src="${post._embedded?.["wp:featuredmedia"]?.caption?.rendered.srcset}"</p>
                                        
            
            popupImageContainer.innerHTML += `<img class="specific-popup-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />`  
                                    }
        
        createHtml(post);

       
    }
    catch(error) {
        postContainer.innerHTML = displayError("Feil under henting av posten. Vennligst gå tilbake til forrige side." , displayError);
    }
    
    finally {
        onLoad();
    }
}

fetchPost(url);


/* Make featured image larger */

const postImage = document.querySelector(".specific-post-image-container");
const popupImageContainer = document.querySelector(".popup-image");

postImage.onclick = function() {
    popupImageContainer.style.display = ("block");
    postImage.style.display = ("none");
}

popupImageContainer.onclick = function() {
    popupImageContainer.style.display = ("none");
    postImage.style.display = ("block");
    console.log("hidden");
}

