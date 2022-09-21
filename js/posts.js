const carousel = document.querySelector('.posts-container');

const seeMoreButton = document.querySelector(".see-more")

const baseUrl = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed"


const url = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed";


async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(function(post){
        carousel.innerHTML += `<div class="all-posts">
                                <h3>${post.title.rendered}</h3>
                                <img class="post-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />
                                <a href="specific.html?id=${post.id}"<p>Les mer</p></a>
                                </div>`;

    });
}

getPosts(baseUrl)



 function showAllPosts() {
   const newUrl = baseUrl + "&per_page=50";
   carousel.innerHTML = "";
   getPosts(newUrl)

   seeMoreButton.innerHTML =""
}

seeMoreButton.addEventListener("click", showAllPosts);




const searchButton = document.querySelector(".search-button");


searchButton.onclick = function() {
  console.log(searchBar.value);
  const searchBar = document.querySelector(".searchbar");
  const searchUrl = baseUrl + `?search=${searchBar.value}`;

  console.log(searchUrl)

  seeMoreButton.innerHTML =""
  getPosts(searchUrl);
}