let sideMenu = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((orders) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${orders.productName}</td>
    <td>${orders.productNumber}</td>
    <td>${orders.paymentStatus}</td>
    <td class="${
      orders.shipping === "Declined"
        ? "danger"
        : orders.shipping === "pending"
        ? "warning"
        : "primary"
    }">${orders.shipping}</td>
    <td class="primary">Details</td>
            `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
