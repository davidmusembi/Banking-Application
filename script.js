$(document).ready(function(){
     //Creating a jquery effect  to open the hover effect on the Service page
     $(".design").click(function() {
        $("#design, .design").toggle("slow");
      });
      $("#design").click(function() {
        $(".design, #design").toggle("slow");
      });
      $(".development").click(function() {
        $("#development, .development").toggle("slow");
      });
      $("#development").click(function() {
        $(".development, #development").toggle("slow");
      });
      $(".product-mgt").click(function() {
        $("#product-mgt, .product-mgt").toggle("slow");
      });
      $("#product-mgt").click(function() {
        $(".product-mgt, #product-mgt").toggle("slow");
      }); 
      $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();
  
        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh Ksh400 Thank you for chosing  Olympus PizzaINN.");
        $("#delivery").trigger("reset");
        return false;
  
    });
    //Creating a function to validate the submit button on contact page
    var contactForm = $("#contact-form");

contactForm.on("submit", function(e) {
 e.preventDefault();
 let formValid = validateContactForm();
 if (formValid) {
     const name = $("input.name").val();

     alert(`Thank you ${name}, we have received your message. Thank you for reaching out to us.`);
     clearForm();
 }
});
function validateContactForm() {
    let isFormValid = true;
    const formInputs = contactForm.find("input,textarea");

    formInputs.each(function() {
        if (!$(this).val()) {
            $(this).addClass("is-invalid");
            isFormValid = false;
        }
    });
    return isFormValid;
}

function removeFormErrors() {
    contactForm.find("input,textarea").on("keydown", function() {
        if ($(this).hasClass("is-invalid")) {
            $(this).removeClass("is-invalid");
        }
    });
}

function clearForm() {
    contactForm.find("input,textarea").each(function() {
        $(this).val("");
    });
  }

  removeFormErrors();
    
  });
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('show');
});

