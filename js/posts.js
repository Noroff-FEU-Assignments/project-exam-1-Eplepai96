const postsContainer = document.querySelector('.posts-container');
const contentContainer = document.querySelector('.posts-top')

const seeMoreButton = document.querySelector(".see-more")

const baseUrl = "https://eplepaisolutions.no/wp-json/wp/v2/posts?"

const url = "https://eplepaisolutions.no/wp-json/wp/v2/posts?page=1&_embed";

/* Display posts */

async function getPosts(url) {
  try{
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(function(post){
        postsContainer.innerHTML += `<div class="all-posts">
                                <h3>${post.title.rendered}</h3>
                                <img class="post-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />
                                <a href="specific.html?id=${post.id}"<p class="read-more-btn">Les mer</p></a>
                                </div>`;

    });
  }
    catch(error) {
      contentContainer.innerHTML = displayError("Feil under henting av poster. Vennligst last inn siden på nytt.")
      seeMoreButton.innerHTML = ""
    }
    finally{
      onLoad()
    }
}

getPosts(url)


/* Search */

const searchButton = document.querySelector(".search-button");
const searchBar = document.querySelector(".searchbar");

searchButton.onclick = function() {
  
  console.log(searchBar.value);
  const searchUrl = baseUrl + `&_embed&search=${searchBar.value}`;

  console.log(searchUrl);

  seeMoreButton.innerHTML = ""
  postsContainer.innerHTML = ""

  getPosts(searchUrl);
}

// searchButton.addEventListener("click", searchPosts)


/* See more function */

function showAllPosts() {
  const newUrl = baseUrl + "&per_page=50&_embed";
  
  console.log(newUrl);

  seeMoreButton.innerHTML ="";
  postsContainer.innerHTML = ""

  getPosts(newUrl);
  
}

seeMoreButton.addEventListener("click", showAllPosts);