var posts=["2024/10/26/潇潇是狗/","2024/10/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };