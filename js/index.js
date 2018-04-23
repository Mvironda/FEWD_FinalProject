$(document).ready(function() {

  // prevent a tags from making page jump

    $('.hint, .next1, .previous2, .next2, .previous3, .event').click(function(event) {
        event.preventDefault();
    });

    $('#onetoones').click(function() {
      $('.onetoones').show();
      // $('#onetoones').css({"background: #918C8C"});
      $('.mockinterviews').hide();
      $('.videoforums').hide();
      $('.skillsworkshop').hide();
      $('.professionalexperience').hide();
    });

    // show hide correct bookings page

    $('#mockinterviews').click(function() {
      $('.mockinterviews').show();
      $('.onetoones').hide();
      $('.videoforums').hide();
      $('.skillsworkshop').hide();
      $('.professionalexperience').hide();
    });

    $('#videoforums').click(function() {
      $('.videoforums').show();
      $('.onetoones').hide();
      $('.mockinterviews').hide();
      $('.skillsworkshop').hide();
      $('.professionalexperience').hide();
    });

    $('#skillsworkshop').click(function() {
      $('.skillsworkshop').show();
      $('.onetoones').hide();
      $('.mockinterviews').hide();
      $('.videoforums').hide();
      $('.professionalexperience').hide();
    });

    $('#professionalexperience').click(function() {
      $('.professionalexperience').show();
      $('.onetoones').hide();
      $('.mockinterviews').hide();
      $('.videoforums').hide();
      $('.skillsworkshop').hide();
    });

    // show hint

    $('.hint').click(function() {
      $('#show-this-on-click').show();
    });

    // transition through form

    $('.next1').click(function() {
      var answer = $('[name="question1"]:checked').val();
      if (answer) {
        $('.q2').show();
        $('.q1').hide();
      } else {
        $('#block').show();
      }
    });

    $('.previous2').click(function() {
      $('.q1').show();
      $('.q2').hide();
    });

    $('.next2').click(function() {
      var answer = $('[name="question2"]:checked').val();
      if (answer) {
        $('.q3').show();
        $('.q2').hide();
      } else {
        $('#block2').show();
      }
    });

    $('.previous3').click(function() {
      $('.q2').show();
      $('.q3').hide();
    });

    $('.finish').click(function() {
      var answer = $('[name="question3"]:checked').val();
      if (answer) {
        $('.finito').show();
        $('.q3').hide();
      } else {
        $('#block3').show();
      }
    });

});