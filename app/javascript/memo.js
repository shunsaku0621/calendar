function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    // js->ルーティング->コントローラ->js
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/blogs", true);
    xhr.responseType = "json";
    xhr.send(formData);
    // 通信が成功した場合の処理
    xhr.onload = ()=>{
      // console.log(xhr.response);
      const tt = document.getElementById("tt");
      const item = xhr.response.blog
      const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${blog.title}
        </div>
        <div class="post-content">
          ${blog.title}
        </div>
      </div>`;
      console.log(html)
      // tt.insertAdjacentHTML("beforeend", html);
    };
  });
 };
 
 window.addEventListener('load', post);