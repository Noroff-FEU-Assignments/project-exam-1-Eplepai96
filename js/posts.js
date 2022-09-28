const postsContainer = document.querySelector('.posts-container');

const seeMoreButton = document.querySelector(".see-more")

const baseUrl = "http://soppsankingno.local/wp-json/wp/v2/posts?"

const url = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed";

/* Display posts */

async function getPosts() {
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

getPosts(url)


/* See more function */

 function showAllPosts() {
   const newUrl = baseUrl + "&per_page=50";
   postsContainer.innerHTML = "";
   getPosts(newUrl);

   console.log(newUrl);

   seeMoreButton.innerHTML ="";
   
}

seeMoreButton.addEventListener("click", showAllPosts);



/* Search */

const searchButton = document.querySelector(".search-button");

searchButton.onclick = function() {
  
  const searchBar = document.querySelector(".searchbar").value;
  console.log(searchBar);
  const searchUrl = baseUrl + `&search=${searchBar}`;

  console.log(searchUrl)

  seeMoreButton.innerHTML =""
  getPosts(searchUrl);
}

