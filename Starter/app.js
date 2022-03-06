let g = G$("John", "Doe");
g.greet().setLang("es").greet(true);

$("#login").click(function () {
  let loginGrtr = G$("Bart", "Judge");
  $("#logindiv").hide();
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
