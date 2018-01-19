$(document).ready(function() {
  jQuery.validator.setDefaults({
    debug:true,
    success: 'valid'
  });

function phoneEmailValidate(){
  $.validator.addMethod("customPhoneNumber", value => /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(value), "Enter a valid phone number");
  $.validator.addMethod("customEmail", value => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value), "Enter a valid email");


	$('#contactForm').validate({
    ignore: "",
		rules: {
      firstName:"required",
      lastName:"required",
			email: {
				required: true,
				customEmail:true
			},
			phoneNumber: {
				required: true,
        customPhoneNumber: true
			},
			position: {
				required: true
			},
			resume: {
				required: true,
        extension: "pdf|doc|docx"
      }
		},
		messages: {
			firstName: "Please enter your first name",
			lastName: "Please enter your last name",
			email: {
			},
			PhoneNumber: {
				required: "Please enter your phone number"
			},
			position: {
				required: " Please select a position"
			},
			resume: {
				required: "Your resume is required",
        extension: "Wrong file type"
			},
		},
  })
  };
  phoneEmailValidate();

});
