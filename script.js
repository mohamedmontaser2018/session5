document.getElementById("demoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Form captured locally (static demo, nothing is sent anywhere).";
});

document.getElementById("createBtn").addEventListener("click", () => {
  document.getElementById("formMsg").textContent = "Account creation flow not implemented in this layout-only demo.";
});
