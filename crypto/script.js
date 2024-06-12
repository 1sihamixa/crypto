let arr = {};
const loaded = async () => {
    try {
        const res = await fetch("https://api.coincap.io/v2/assets");
        arr = await res.json();
        console.log(arr);
    } catch (err) {
        console.error(err);
    }
};
let resultOne = 0;

function updateStyle() {
    let inputElement = document.getElementById("commande");
    let inputValue = parseFloat(inputElement.value);

    if (!isNaN(inputValue)) {
        resultOne += inputValue;
        document.getElementById("result").innerText = resultOne;
        document.getElementById("result").style.height = resultOne + "vmin";
        document.getElementById("result").style.background = "blue";
    } 
}

loaded();