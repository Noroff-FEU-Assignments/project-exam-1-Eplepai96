const carousel = document.querySelector('.posts-container');

const baseUrl = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed"


const url = "http://soppsankingno.local/wp-json/wp/v2/posts?page=1&_embed";
async function fetchPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
   }
   catch {error}
}

fetchPosts()

// async function getPosts(url) {
//     const response = await fetch(url);
//     const posts = await response.json();
//     console.log(response.body)

    

//     posts.forEach(function(post){
//         carousel.innerHTML += `<div><a href="posts.html?id=${post.id}"
//                                 <h3>${post.title.rendered}</h3>
//                                 <p class="slug">${post.slug}</p> 
//                                 <img class="post-image" src="${post._embedded?.["wp:featuredmedia"][0].source_url}"/></div></a></div>`
                                
//     })
// }





async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(response.body)



    posts.forEach(function(post){
        carousel.innerHTML += `<div class="all-posts">
                                <h3>${post.title.rendered}</h3>
                                <img class="post-image" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}" />
                                <a href="specific.html?id=${post.id}"<p>Les mer</p></a>
                                </div>`;

    });
}

getPosts(baseUrl)
