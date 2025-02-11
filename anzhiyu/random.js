var posts=["posts/c8440403.html","posts/6f537645.html","posts/f4e87198.html","posts/b54552e4.html","posts/a3f71340.html","posts/2358d47a.html","posts/9accd4d9.html","posts/ef885403.html","posts/b1c9ac88.html","posts/63c19269.html","posts/e811689c.html","posts/201cef2f.html","posts/5b722a34.html","posts/d786f018.html","posts/8c59de9f.html","posts/8443637f.html","posts/e5805fd1.html","posts/8c8e6a74.html","posts/a60ca4c1.html","posts/7e81ca61.html","posts/42dc9a81.html","posts/43f5094e.html","posts/70521164.html","posts/faa6fc84.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"煙花巷陌","link":"https://blog.ilue.pp.ua/","avatar":"https://picsur.ilue.pp.ua/i/1ed788da-9790-4d70-a888-d2773adc4124.webp","descr":"不思进取，顺其自然。","recommend":true},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://cdn.jsdelivr.net/npm/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };