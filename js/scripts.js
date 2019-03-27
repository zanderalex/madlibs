$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var person1Input = $('input#person1').val();
    var person1Input = $('input#person2').val();
    var person1Input = $('input#animal').val();
    var person1Input = $('input#exclamation').val();
    var person1Input = $('input#verb').val();
    var person1Input = $('input#noun').val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $('.animal').text(animalInput);
    $('.exclamation').text(exclamationInput);
    $('.verb').text(verbInput);
    $('.noun').text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
