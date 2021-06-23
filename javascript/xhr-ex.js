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
    let commentData = getCommentData()

    console.log(commentData);


    // 1.create the objof XMLHttpRequest 
    // 2. configure xhr obj -> obj.open(method, url)
    // 3. set the header request -> obj.setRequestheader("content-type", "application/json")
    // 4. send the xhr request -> obj.send(commentData) JSON.stringify(commentData)
    // 5. obj.onload and obj.onerror statements on events


    let req = new XMLHttpRequest();
    req.open("POST", "https://jsonplaceholder.typicode.com/comments")
    req.setRequestHeader("content-type", "application/json");
    req.send(JSON.stringify(commentData));
    req.onload = function () {
        if(req.status == 201) {
            console.log(req.response);
            console.log("Submitted Succesfully");
        } else {
            console.log(req.status)
        }
    };

    req.onerror = function () {
        console.log("Network Error!! Try again later")
    }
}

function getAllComments() {
    let commentReq = new XMLHttpRequest();

    commentReq.open("GET", "https://jsonplaceholder.typicode.com/comments");
    commentReq.setRequestHeader("content-type", "application/json");
    commentReq.send();

    //to access response syntax -> xhrobj.response

    commentReq.onload = function () {
        if(commentReq.status == 200) {
            let res = commentReq.response;

            let result = JSON.parse(res);

            console.log(result);

            let commentsTable = `
            <table>

                <tr>
                    <th> Post Id </th>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Comment</th>
                    </tr>

               
            `

            result.map((item, id) => {
                commentsTable += `
                <tr>
                    <td> ${item.postId}</td>
                    <td> ${item.id}</td>
                    <td> ${item.name}</td>
                    <td> ${item.email}</td>
                    <td> ${item.body}</td>                 
                    </tr>`
            });

            console.log(commentsTable);
            document.getElementById("output").innerHTML = commentsTable;
        }
    }
}
