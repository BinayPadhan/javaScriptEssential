function groceryTracker(amounts) {
    let total = 0;
    for (let i = 0; i < amounts.length; i++) {
        total += parseFloat(amounts[i]);
    }
    return total;
}

function calculateTotal() {
    const grocery1 = document.getElementById("grocery1").value;
    const grocery2 = document.getElementById("grocery2").value;
    const grocery3 = document.getElementById("grocery3").value;

    const totalAmount = groceryTracker([grocery1, grocery2, grocery3]);

    document.getElementById("totalAmount").innerText = "Total amount spent on groceries: $" + totalAmount.toFixed(2);
}
