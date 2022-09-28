const carouselContainer = document.querySelector('.carousel-container');

const baseUrl = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed"

const url = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed";


/* Fetch url */

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
   }
   catch {error}
}

fetchPosts()


/* Create posts */

async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(response.body)



    posts.forEach(function(post){
        carouselContainer.innerHTML += `<div class="carousel-items">
                                <img class="post-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />
                                <h3 class="post-title">${post.title.rendered}</h3>
                                <a href="specific.html?id=${post.id}"<p class="read-more-btn">Les mer</p></a>
                                </div>`;

    });
}

getPosts(baseUrl);



/* Carousel functionality */

const nextButton = document.querySelector("#next-btn");
const previousButton = document.querySelector("#previous-btn");

const gap = 520;

let width = carouselContainer.offsetWidth;

function nextSlide() {
  carouselContainer.scrollBy(width + gap, 0);
}

function previousSlide() {
  carouselContainer.scrollBy(-(width + gap), 0);
}

nextButton.addEventListener("click", nextSlide)
previousButton.addEventListener("click", previousSlide)
