// Wait for the document to be ready before we add different call handlers
$(document).ready(function () {
	$('#submit').click(function(evt) {
		var name = $('#name').val()
		var email = $('#email').val()
		var message = $('#message').val()
		var statusElement = $('#status')
		statusElement.empty() // Everytime we run this function we empty the status element

		// Name validator
		if (name.length >= 2) {
			statusElement.append("<div>Name is valid!</div>") // Adds new HTML inside this selector
		} else {
			evt.preventDefault() // Prevent the default action of this button if the form is invalid
			statusElement.append("<div>Name is invalid!</div>")
		}

		// Email validator
		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElement.append("<div>Email is valid!</div>") // Adds new HTML inside this selector
		} else {
			evt.preventDefault() // Prevent the default action of this button if the form is invalid
			statusElement.append("<div>Email is invalid!</div>")
		}

		// Message validator
		if (message.length > 5) {
			statusElement.append("<div>Message is valid!</div>") // Adds new HTML inside this selector
		} else {
			evt.preventDefault() // Prevent the default action of this button if the form is invalid
			statusElement.append("<div>Message is invalid!</div>")
		}
	})
})

// <form action="server.py" method="POST" target = "_blank">