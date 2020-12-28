document.getElementById('tab').addEventListener("mouseover", function () {
    this.style.border = "5px solid tomato";
  })
   
  document.getElementById('tab').addEventListener("mouseout", function () {
    this.style.border = "none";
    this.style.borderBottom = "2px solid tomato";
  })
  