// Document ready handler
$(document).on('ready', function(){
    // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
            // If valid, then submit
            form.submit();
        },
        rules: 
            //check name field is filled out with max characters of 128
            {
              "your-name": {
                  required: true,
                  maxlength: 128,
              },
              //check state field is filled out with max characters of 2
              "your-state": {
                  required: true,
                  maxlength: 2
              },
              //check zip field is filled out with max characters of 5 and only using numbers
              "your-zip": {
                  required: true,
                  maxlength: 5,
                  digits: true
              },
              //check card name field is filled out with max characters of 128
              "card-holder-name": {
                  required: true,
                  maxlength: 128
              },
              //check card numer field is filled out and making sure it is a credit card
              "card-number": {
                  required: true,
                  creditcard: true
              },
              //check 3digit code on back of card field is filled out with max characters of 3 and only using numbers
              "cvv": {
                  required: true,
                  maxlength: 3,
                  digits: true
              },
              "comments": {
                  maxlength: 500
              }              
           }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});