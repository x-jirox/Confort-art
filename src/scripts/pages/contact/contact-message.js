// scripts/pages/contact/contact-message.js

document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value;

    // Definir el número de WhatsApp directamente en el script
    const whatsappNumber = "593963955142"; // Número de WhatsApp

    const whatsappMessage =
      `¡Hola! Soy ${name}.\n\n` +
      `Me interesa: ${interest}\n` +
      `Mi teléfono: ${phone}\n\n` +
      `Mensaje: ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  });
