$(document).ready(function() {

    $('.hint, .next1, .previous2, .next2, .previous3').click(function(event) {
        event.preventDefault();
    });

    $('.hint').click(function() {
      $('#show-this-on-click').show();
    });

    $('.next1').click(function() {
      $('.q2').show();
      $('.q1').hide();
    });

    $('.previous2').click(function() {
      console.log("next")
      $('.q1').show();
      $('.q2').hide();
    });

    $('.next2').click(function() {
      $('.q3').show();
      $('.q2').hide();
    });

    $('.previous3').click(function() {
      $('.q2').show();
      $('.q3').hide();
    });

     $('.finish').click(function() {
      $('.finito').show();
      $('.q3').hide();
    });

});