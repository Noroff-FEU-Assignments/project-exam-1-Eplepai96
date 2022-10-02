const postContainer = document.querySelector(".post-container");
const imageContainer = document.querySelector(".specific-post-image-container");
const body = document.querySelector("body");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


console.log(id);

const baseUrl = "https://eplepaisolutions.no/wp-json/wp/v2/posts/"

const url = "https://eplepaisolutions.no/wp-json/wp/v2/posts/" + id + "?_embed";


console.log(url);


/* Display specific content */

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
            
            popupImageContainer.innerHTML += `<img class="specific-popup-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />`  
                                    }
        
        createHtml(post);

       
    }
    catch(error) {
        postContainer.innerHTML = displayError("Feil under henting av posten. Vennligst gå tilbake til forrige side." , displayError);
    }
    
    finally {
        onLoad()
    }
}

fetchPost(url);


/* Make featured image larger */

const postImage = document.querySelector(".specific-post-image-container");
const popupImageContainer = document.querySelector(".popup-image");

postImage.onclick = function() {
    popupImageContainer.style.display = ("block")
    postImage.style.display = ("none")
}

popupImageContainer.onclick = function() {
    popupImageContainer.style.display = ("none")
    postImage.style.display = ("block")
    console.log("hidden")
}

// const postImage = document.querySelector(".specific-post-image-container")

// function enlargeImage() {
//     this.classList.toggle("enlarge-image")
//     console.log("hi")
// }

// postImage.addEventListener("click", enlargeImage)


// const modalContainer = document.querySelector(".modal-image-container")
// const caption = document.querySelector(".caption")
// const modalImage = document.queryselector("#modal-image")

// postImage.addEventListener("click", function () {
//     modalContainer.style.display = "flex";
//     modalImage.src = this.src;
//     modalImage.alt = this.alt;

//     caption.innerHTML = this.alt;
//   });




// function enlargeImage(){
//     console.log(23)
//     postImage.requestFullscreen()
// }

// imageContainer.addEventListener("click", enlargeImage);
