const carouselContainer = document.querySelector('.carousel-container');
const postsContainer = document.querySelector(".posts");

const baseUrl = "https://eplepaisolutions.no/wp-json/wp/v2/posts?page=1&_embed";

const url = "https://eplepaisolutions.no/wp-json/wp/v2/posts?page=1&_embed";


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

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(response.body);



    posts.forEach(function(post){
        carouselContainer.innerHTML += `<div class="carousel-items">
                                <img class="post-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />
                                <h3 class="post-title">${post.title.rendered}</h3>
                                <a href="specific.html?id=${post.id}"<p class="read-more-btn">Les mer</p></a>
                                </div>`;

    });
  }
    catch(error) {
      postsContainer.innerHTML = displayError("Feil under henting av poster. Vennligst last inn siden på nytt.");
    }

    finally {
      onLoad();
    }
}

getPosts(baseUrl);

/* Search */

// const searchButton = document.querySelector(".search-button");
// const searchBar = document.querySelector(".searchbar");

// searchButton.onclick = function() {
  
//   console.log(searchBar.value);
//   const searchUrl = "http://eplepaisolutions.no/wp-json/wp/v2/posts?" + `&_embed&search=${searchBar.value}`;

//   console.log(searchUrl);

//   postsContainer.innerHTML = ""

//   getPosts(searchUrl);
// }



/* Carousel functionality */

const nextButton = document.querySelector("#next-btn");
const previousButton = document.querySelector("#previous-btn");

const gap = 780;

const length = carouselContainer.offsetWidth;

function nextItems() {
  carouselContainer.scrollBy(length + gap, 0);
}

function previousItems() {
  carouselContainer.scrollBy(-(length + gap), 0);
}

nextButton.addEventListener("click", nextItems);
previousButton.addEventListener("click", previousItems);
