document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".content-list li");
  const iconContainer = document.querySelector(".icon-container");

  listItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const iconName = item.dataset.icon;

      if (iconName === undefined) return;

      iconContainer.innerHTML = `<i class="fab fa-${iconName} fa-4x"></i>`;
      iconContainer.classList.add("active");

      // Check if the screen width is 768px or less
      if (window.innerWidth <= 768) {
        // Create a new icon-container-small element and add it to the list item
        const iconContainerSmall = document.createElement("div");
        iconContainerSmall.classList.add("icon-container-small");
        iconContainerSmall.innerHTML = `<i class="fab fa-${iconName}"></i>`;
        item.appendChild(iconContainerSmall);
      }
    });

    item.addEventListener("mouseout", () => {
      iconContainer.classList.remove("active");

      // Remove the icon-container-small element when mouse leaves the list item
      const iconContainerSmall = item.querySelector(".icon-container-small");
      if (iconContainerSmall) {
        item.removeChild(iconContainerSmall);
      }
    });
  });
});
