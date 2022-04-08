console.log("HI!");

async function getTimeFromDate(date = false) {
    if(!date) {
        date = new Date();
    }

    return String(date)
}

(async () => {
    var show_time = document.getElementById("show_time");
    console.log(show_time);
    show_time.innerHTML = await getTimeFromDate();
})
().catch(error => {
    // Handle error
});