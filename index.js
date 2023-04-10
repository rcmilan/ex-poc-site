document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".content-list li");
  const iconContainer = document.querySelector(".icon-container");

  listItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const iconName = item.dataset.icon;
      iconContainer.innerHTML = `<i class="fab fa-${iconName} fa-4x"></i>`;
      iconContainer.classList.add("active");
    });

    item.addEventListener("mouseout", () => {
      iconContainer.classList.remove("active");
    });
  });
});
