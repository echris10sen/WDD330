// alert-module.js
document.addEventListener("DOMContentLoaded", () => {
    // Function to create an alert element
    function createAlert(alert) {
      const alertElement = document.createElement("section");
      alertElement.classList.add("alert-list");
      alertElement.style.backgroundColor = alert.background;
      alertElement.style.color = alert.color;
  
      const messageElement = document.createElement("p");
      messageElement.innerText = alert.message;
      alertElement.appendChild(messageElement);
  
      return alertElement;
    }
  
    // Function to prepend the alert section to the main element
    function prependAlerts(alerts) {
      const mainElement = document.querySelector("main");
      const alertSection = document.createElement("section");
      alertSection.classList.add("alert-container");
  
      for (const alert of alerts) {
        const alertElement = createAlert(alert);
        alertSection.appendChild(alertElement);
      }
  
      mainElement.insertBefore(alertSection, mainElement.firstChild);
    }
  
    // Read alerts from alerts.json
    fetch("../public/json/alerts.json")
      .then((response) => response.json())
      .then((alerts) => {
        if (alerts && alerts.length > 0) {
          prependAlerts(alerts);
        }
      })
      .catch((error) => console.error("Error fetching alerts:", error));
  });