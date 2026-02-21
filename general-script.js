// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => { 
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault(); // stop actual submission
        Swal.fire({
          title: "Booking Confirmed!",
          text: "Our team will contact you shortly to finalize your appointment.",
          icon: "success",
          confirmButtonColor: '#004aad'
        });
      }

      form.classList.add('was-validated')

    }, false)
  })
})();
