function header() {
  var head = "";
  head += '<header><h1><a href="http://www.ktaka.tokyo/">ktakaのホームページ</a></h1><nav class="links"><ul><li><a>Help</a></li><li><a>Miscellaneous</a></li><li><a>Conatct</a></li><li><a href="https://github.com/KTakahiro2001" target="_blank">Github</a></li></ul></nav></header>';
  document.write(head);
}

function sidebar() {
  document.write('<div id="left-menu"><a href="http://www.ktaka.tokyo/programming">プログラミング手引き</a></div>');
}

function footer() {
    document.write('<footer><a href="http://www.ktaka.tokyo/about">About this page</a></footer>');
}
