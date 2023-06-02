// function test() {
//   console.log("test");
//   var x = document.getElementById("hidePassword");
//   if (x.style.display == "block") {
//     document.getElementById("hidePassword").style.display = "none";
//     document.getElementById("unHidePassword").style.display = "block";
//     document.getElementById("exampleDropdownFormPassword1").type = "password";
//   } else {
//     document.getElementById("hidePassword").style.display = "block";
//     document.getElementById("unHidePassword").style.display = "none";
//     document.getElementById("exampleDropdownFormPassword1").type = "text";
//   }
// }
// function ValidateEmail(inputText) {
//   var inputText = document.getElementById("exampleDropdownFormEmail1").value;
//   var inputPassword = document.getElementById(
//     "exampleDropdownFormPassword1"
//   ).value;
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (inputText.match(mailformat) && inputPassword !== "") {
//     return alert("Success!");
//   } else if (inputText === "") {
//     alert("Please enter email!");
//   } else if (inputPassword === "") {
//     alert("Please enter password!");
//   } else {
//     alert("Email không đúng! Mời nhập lại");
//   }
//   return false;
// }
function Login() {
  let a = document.getElementById("user").value;
  let b = document.getElementById("password").value;
  if ((a === "admin" && b === "123456") || b === "123") {
    $("form").attr("action", "/tinhtienAGN/pages/sotay.html");
  } else alert("sai");
}
function Thousand() {
  document.getElementById("tienNuoc").value *= 1000;
}
function Thousand1() {
  document.getElementById("tongTienNuoc").value *= 1000;
}
function Thousand2() {
  document.getElementById("tongTienThanhToan").value *= 1000;
}
function switcher() {
  console.log(document.getElementById("checkboxInput").value);
  document.getElementById("tongTienNuoc").style.display = "none";
  document.getElementById("shipping").style.display = "block";
}

function tinhTien() {
  let tienNuoc = document.getElementById("tienNuoc").value.toLocaleString();
  let tongTienNuoc = document.getElementById("tongTienNuoc").value;
  let tongTienThanhToan = document.getElementById("tongTienThanhToan").value;
  tinhTienNuoc = (tienNuoc / tongTienNuoc) * tongTienThanhToan;
  document.getElementById("tongTienTra").innerHTML = tinhTienNuoc;
  document.getElementById("giaTien").style.display = "block";
}
