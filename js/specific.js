const postContainer = document.querySelector(".post-container");
const imageContainer = document.querySelector(".specific-post-image")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


console.log(id);

const baseUrl = "http://soppsankingno.local/wp-json/wp/v2/posts/"

const url = "http://soppsankingno.local/wp-json/wp/v2/posts/" + id + "?_embed";


console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);
      
        function createHtml() {
            postContainer.innerHTML += `<div>
                                        <h1>${post.title.rendered}</h1>
                                                                              
                                        <p class="post-content">${post.content.rendered}</p>                               
                                        </div>`


            imageContainer.innerHTML += `<img class="" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />` 
                                    }
        
        createHtml(post);
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchPost(url);

const postImage = document.querySelector(".specific-post-image")

function enlargeImage(){
    console.log(23)
    postImage.requestFullscreen()
}

imageContainer.addEventListener("click", enlargeImage);
