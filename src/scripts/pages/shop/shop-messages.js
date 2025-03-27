document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = button.dataset.price;
        const phoneNumber = "593991530112";

        const message =
          `Hola! 👋\n\nEstoy interesado/a en este producto:\n\n*${name}* 🛒\n\n` +
          `Precio: *$${parseFloat(price).toFixed(2)}* 💵\n\n` +
          `¿Me puedes dar más información? 🤔`;

        const urlApiWhats = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(urlApiWhats, "_blank");
      });
    });
  });