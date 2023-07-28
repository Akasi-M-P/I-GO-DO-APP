function upDateTime() {
    const now = new Date();

   

    const time = now.toLocaleTimeString();
    document.getElementById("time").textContent = time

    const date = now.toLocaleDateString();
    document.getElementById("date").textContent = date;
}

upDateTime();
setInterval(upDateTime, 1000)