// posts 
const posts = [{
        title: 'Post One',
        body: 'This is the First Post'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];


// fun
function creatPost(post) {
    setTimeout(function() {
        posts.push(post);
    }, 2000);
}

// // get 
// function getPost()
// {
//   setTimeout(function(){

//     let output = '';
//     posts.forEach(function(post){
//       output+=`<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;

//   },1000);

// }

// creatPost({title: 'Post Three', body:'This is the third post'});
// getPost();

// fun
// function creatPost(post,callback)
// {
// setTimeout(function()
// {
//   posts.push(post);
//   callback();
// },2000);
// }

// // get 
// function getPost()
// {
//   setTimeout(function(){

//     let output = '';
//     posts.forEach(function(post){
//       output+=`<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;

//   },1000);

// }

// creatPost({title: 'Post Three', body:'This is the third post'},getPost);


// With promise 
function creatPost(post) {
    // return a promise 
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            posts.push(post);

            // for error 
            const err = true;
            if (!err) {
                resolve();
            } else {
                reject('There is an Error on Server..');
            }

        }, 2000);

    });



}

// get 
function getPost() {
    setTimeout(function() {

        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);

}

creatPost({ title: 'Post Three', body: 'This is the third post' }).then(getPost).catch(function(err) { console.log(err) });