const toggleBtn = document.querySelector(".toggle-btn");
const navigation = document.querySelector(".navigation");

toggleBtn.addEventListener("click", () => {
    navigation.classList.toggle("active");
    toggleBtn.classList.toggle("active");

    if (toggleBtn.classList.contains("active")) {
        toggleBtn.innerHTML = "✖";
    } else {
        toggleBtn.innerHTML = "☰";
    }
});