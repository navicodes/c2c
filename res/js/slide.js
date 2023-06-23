const slide = () => {
    const width = document.getElementById("background").offsetWidth;
    const left = document.getElementById("background").style.left;
  
    if (left === "0") {
      document.getElementById("background").style.left = width + "px";
    } else {
      document.getElementById("background").style.left = "0px";
    }
  };
  
  setInterval(slide, 3000);
  