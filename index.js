document.querySelectorAll("button").forEach((button) => {
  button.onclick = (button) => {
    if (button.target.innerHTML.split(" ")[1] == "Español") {
      button.target.previousElementSibling.className = "on";
      button.target.previousElementSibling.previousElementSibling.className =
        "off";
      button.target.innerHTML = "↳ English";
    } else {
      button.target.previousElementSibling.className = "off";
      button.target.previousElementSibling.previousElementSibling.className =
        "on";
      button.target.innerHTML = "↳ Español";
    }
  };
});
