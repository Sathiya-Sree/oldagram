const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "which coin are YOU stacking up today??",
        likes: 152
    }
]

let mainEl = document.getElementById("main-el")

for(let i=0; i<posts.length ; i++)
{ 
    mainEl.innerHTML += 
    `<section class="section-one">
                    <img id="avatar-img" src="${posts[i].avatar}"/>
                    <div class="section1-div">
                        <p>${posts[i].name} <a>${posts[i].location}</a></p> 
                    </div>
                </section>
                <section class="section-two">
                    <img id="post-img" src="${posts[i].post}"/>
                    <div class="icon-div">
                        <img class="icon-img" src="images/icon-heart.png"/>
                        <img class="icon-img" src="images/icon-comment.png"/>
                        <img class="icon-img" src="images/icon-dm.png"/>
                    </div>
                    <p >${posts[i].likes} likes</p>
                    
                </section>
                <footer>
                    <p>${posts[i].username} <a>${posts[i].comment}</a></p>
                </footer>`
} 
