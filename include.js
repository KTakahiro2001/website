function header() {
  var head = "";
  head += '<header><h1>ktakaのホームページ</h1><nav class="links"><ul><li><a>Help</a></li><li><a>Miscellaneous</a></li><li><a>Conatct</a></li><li><a href="https://github.com/KTakahiro2001" target="_blank">Github</a></li></ul></nav></header>';
  document.write(head);
}

function sidebar() {
  document.write('<div class="left-menu">プログラミング手引き</div>');
}

function footer() {
    document.write('<footer><a href="about">About this page</a></footer>');
}
