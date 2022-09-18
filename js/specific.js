const postContainer = document.querySelector(".post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



console.log(id);

const baseUrl = "http://soppsankingno.local/wp-json/wp/v2/posts/"

const url = "http://soppsankingno.local/wp-json/wp/v2/posts?" + id;

// const productImage = url + "wp_get_attachment_image_src";

// console.log(productImage)

console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);

        createHtml(post);
      
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchPost(url);

function createHtml(post) {
    postContainer.innerHTML += `<div>
                                <h1>${post.title}</h1>
                                <div class="post-image" style="background-image:url(${post.media})"></div>
                                <div class="post-price"> Price: ${post.excerpt.rendered}</div>
                                <div class="post-description"> ${post.content.rendered}</div>
                                </div>`
                                ;

                                console.log(post)
                            }

createHtml();