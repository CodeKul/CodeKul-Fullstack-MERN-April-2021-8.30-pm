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
                let comment = getCommentData()

                // fetch method syntax -> fetch(url, {method, headers, body})
                //fetch method returns a promise


                let p = fetch("https://jsonplaceholder.typicode.com/comments", 
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },

                    body: JSON.stringify(comment),
                });

                p.then(function (response) {
                    console.log(response.json());
                }).catch(function (errMsg) {
                    console.log(errMsg);
                });
            }


            function getAllComments() {
                fetch("https://jsonplaceholder.typicode.com/comments",
                {
                    method:"GET",
                    headers: {
                        "Content-type": "application/json"
                    },
                })

                .then(function (res) {
                    let result = res.json();

                    //[{}, {}, {}...{500}]

                    return result;
                })

                .then(function (result) {
                    console.log(result);

                    let outputTable = `
                    <table>
                    
                    <tr>
                    <th> Post Id </th>
                         <th> ID </th>
                         <th> Name </th> 
                         <th> Email </th>
                         <th> Comment</th>
                    </tr>`;

                    result.map(function (item, id) {
                        outputTable += `
                           <tr>
                              <td> ${item.postId}</td>
                            <td> ${item.id}</td>
                            <td> ${item.name}</td>
                            <td> ${item.email}</td>
                            <td> ${item.body}</td>                 
                        </tr>`;
                    });

                    console.log(outputTable);
                    document.getElementById("output").innerHTML = outputTable;
                    
                   
                })
            }