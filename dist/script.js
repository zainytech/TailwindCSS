const boxClick = () =>{
    const x = document.getElementsByClassName('toggle')[0];
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementsByClassName('up-arrow')[0].style.display = "block";
        document.getElementsByClassName('down-arrow')[0].style.display = "none";

      } else {
        x.style.display = "none";
        document.getElementsByClassName('up-arrow')[0].style.display = "none";
        document.getElementsByClassName('down-arrow')[0].style.display = "block";
    }
    }