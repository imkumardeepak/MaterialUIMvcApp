// Import Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Example usage
document.addEventListener("DOMContentLoaded", function () {
  console.log("Material UI components are ready to use!");

  // Add Material UI-like behavior to buttons
  const buttons = document.querySelectorAll(".mui-btn");

  buttons.forEach(function (button) {
    // Add ripple effect on click
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.offsetX - radius}px`;
      ripple.style.top = `${e.offsetY - radius}px`;
      ripple.classList.add("ripple");

      // Remove existing ripples
      const existingRipple = button.getElementsByClassName("ripple")[0];
      if (existingRipple) {
        existingRipple.remove();
      }

      button.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    });
  });

  // Material UI Searchable Dropdown Implementation
  const dropdownHeader = document.getElementById("dropdownHeader");
  const dropdownList = document.getElementById("dropdownList");
  const dropdownSearch = document.getElementById("dropdownSearch");
  const dropdownOptions = document.getElementById("dropdownOptions");
  const selectedValue = document.getElementById("selectedValue");

  // Check if dropdown elements exist on the page
  if (
    dropdownHeader &&
    dropdownList &&
    dropdownSearch &&
    dropdownOptions &&
    selectedValue
  ) {
    // Dummy data for the dropdown
    const dummyData = [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
      { id: 3, name: "Option 3" },
      { id: 4, name: "Option 4" },
      { id: 5, name: "Option 5" },
      { id: 6, name: "Apple" },
      { id: 7, name: "Banana" },
      { id: 8, name: "Cherry" },
      { id: 9, name: "Date" },
      { id: 10, name: "Elderberry" },
    ];

    // Populate dropdown with options
    function populateDropdown(options) {
      dropdownOptions.innerHTML = "";
      options.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option.name;
        li.dataset.id = option.id;
        li.addEventListener("click", function () {
          selectedValue.textContent = option.name;
          dropdownList.style.display = "none";
        });
        dropdownOptions.appendChild(li);
      });
    }

    // Initialize dropdown with all options
    populateDropdown(dummyData);

    // Toggle dropdown visibility
    dropdownHeader.addEventListener("click", function () {
      const isDisplayed = dropdownList.style.display === "block";
      dropdownList.style.display = isDisplayed ? "none" : "block";
      // Rotate arrow when dropdown is open
      const arrow = dropdownHeader.querySelector(".mui-dropdown-arrow");
      if (arrow) {
        arrow.style.transform = isDisplayed ? "rotate(0deg)" : "rotate(180deg)";
      }
    });

    // Filter options based on search input
    dropdownSearch.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filteredOptions = dummyData.filter((option) =>
        option.name.toLowerCase().includes(searchTerm)
      );
      populateDropdown(filteredOptions);
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !dropdownHeader.contains(event.target) &&
        !dropdownList.contains(event.target)
      ) {
        dropdownList.style.display = "none";
        // Reset arrow rotation
        const arrow = dropdownHeader.querySelector(".mui-dropdown-arrow");
        if (arrow) {
          arrow.style.transform = "rotate(0deg)";
        }
      }
    });
  }
});
