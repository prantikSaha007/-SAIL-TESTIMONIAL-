document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector("input[name='name']");
  if (nameInput && document.querySelector("#goBtn")) {
    document.querySelector("#goBtn").addEventListener("click", () => {
      if (nameInput.value.trim() !== "") {
        window.location.href = "prof.html";
      } else {
        alert("Please enter your name");
      }
    });
  }

  const profDisplay = document.getElementById("prof-name");
  if (profDisplay) {
    const params = new URLSearchParams(window.location.search);
    const prof = params.get('prof');
    profDisplay.innerText = prof ? prof.toUpperCase() : "Unknown";
  }

  const submitBtn = document.getElementById("bs");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const comment = document.getElementById("comment").value.trim();
      if (comment === "") {
        alert("Please write a testimonial before submitting.");
        return;
      }
      window.location.href = "thank-you.html";
    });
  }

  const profCards = document.querySelectorAll('.prof-card');
  const dataList = document.getElementById('professors');
  const searchInput = document.getElementById('search');
  const noMatchMessage = document.getElementById('p2');

  if (profCards.length && dataList && searchInput) {
    profCards.forEach(card => {
      const name = card.getAttribute('data-name');
      const option = document.createElement('option');
      option.value = name;
      dataList.appendChild(option);
    });

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      let visibleCount = 0;

      profCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const match = name.includes(query);
        card.style.display = match ? 'flex' : 'none';
        if (match) visibleCount++;
      });

      if (noMatchMessage) {
        noMatchMessage.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }
});
const department = document.querySelector(".form-control");

department.addEventListener("change", function () {
  const selectedValue = this.value;
  const profCards = document.querySelectorAll(".prof-card");
  let visibleCount = 0;

  profCards.forEach(card => {
    if (card.id === selectedValue) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
    console.log("Selected:", selectedValue.innerText);
    console.log("Card ID:", card.id);

  });

  const noMatchMessage = document.getElementById("p2");
  if (noMatchMessage) {
    noMatchMessage.style.display = visibleCount === 0 ? "block" : "none";
  }
});