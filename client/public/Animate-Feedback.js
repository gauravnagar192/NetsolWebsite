var a = 0;
var b = 0;
var ft = document.getElementsByClassName("ft-card");
var sn = document.getElementsByClassName("sn-card");
ft[a].style.display = "block";
sn[b].style.display = "block";
a++;
b++;
for (a; a < ft.length; a++) {
  ft[a].style.display = "none";
}
for (b; b < sn.length; b++) {
  sn[b].style.display = "none";
}
a = 0;
b = 0;

function slider(){
ft[a].style.display = "none";
sn[b].style.display = "none";
a++;
b++;
if (a === ft.length) {
  a = 0;
}
if (b === sn.length) {
  b = 0;
}
ft[a].style.display = "block";
sn[b].style.display = "block";

  setTimeout("slider()",2000);
}

slider();
