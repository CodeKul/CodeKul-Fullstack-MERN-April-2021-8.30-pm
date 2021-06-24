// const { default: axios } = require("axios");

function getCommentData() {

    let postId = document.getElementById("postId").value;
    let email = document.getElementById("email").value;
    let personName = document.getElementById("personName").value;
     let comment = document.getElementById("content").value;



     let commentPost = {
                postId: postId,
                email: email,
                personName: personName,
                comment: comment,
            };

            return commentPost;
    
}



function sendComment() {
    let commentData = getCommentData();

    // axios -> axios syntax -> axios.method(url, body, {headers})


    let p = axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        JSON.stringify(commentData),
        {
            "Content-type": "application/json"
        }
        
    );

    console.log(p)
    p.then(function (response) {
        console.log(response.data);
    });
}

function getAllComments(){
    let p = axios.get("https://jsonplaceholder.typicode.com/comments",
    {
        "Content-type": "application/json"
    })

    p.then(function(comments) {
        let result = comments.data;

        let output =""

        result.map((item, id) => {
            output += `<p>${item.body}</p>`
        })

        document.getElementById("output").innerHTML = output;
    })
}