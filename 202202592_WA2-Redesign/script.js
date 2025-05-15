
//To add validation to the contact form 


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      response.style.color = "red";
      response.textContent = "Please fill in all fields.";
      return;
    }

    if (!emailRegex.test(email)) {
      response.style.color = "red";
      response.textContent = "Please enter a valid email address.";
      return;
    }

    response.style.color = "green";
    response.textContent = "Thank you! Your message has been sent.";

    form.reset();
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.disabled = false;
      response.textContent = "";
    }, 3000);
  });
});


//to add lightbox to enlarge the images 


const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const src = link.getAttribute('href');
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

 lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

// to add second JS Function fot the cart page 

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const success = params.get('success');

  if (success === '1') {
    document.getElementById('success-message').classList.remove('hidden');
  }
});







  







