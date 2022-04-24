let d = new Date();
let year = d.getFullYear();
document.querySelector("getFullYear").textContent = year;


try {
    let options = {
        weekday: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric",
    };

    document.querySelector("getFullYear").textContent = 
    new Date().toLocaleDateString("en-US", options);
    
} catch (e) {
    alert("Error with code or your browser does not support Locale");
}







