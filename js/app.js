//Update Extra Memory Cost
function updateMemoryCost(cost) {
    const memoryCost = document.getElementById('memory-cost');
    const extraMemoryCost = memoryCost.innerText;
    memoryCost.innerText = cost;
    calculateTotal();

}
document.getElementById('memory-8').addEventListener('click', function () {
    updateMemoryCost(0);
});
document.getElementById('memory-16').addEventListener('click', function () {
    updateMemoryCost(180);
});

//Update Extra Storage Cost
function updateStorageCost(cost) {
    const storageCost = document.getElementById('storage-cost');
    const extraStorageCost = storageCost.innerText;
    storageCost.innerText = cost;
    calculateTotal();
}
document.getElementById('storage-256').addEventListener('click', function () {
    updateStorageCost(0);
});
document.getElementById('storage-512').addEventListener('click', function () {
    updateStorageCost(100);
});
document.getElementById('storage-1024').addEventListener('click', function () {
    updateStorageCost(180);
})

//Update Shipping Cost
function updateDeliveryCost(cost) {
    const deliveryCost = document.getElementById('delivery-cost');
    const extraDeliveryCost = deliveryCost.innerText;
    deliveryCost.innerText = cost;
    calculateTotal();
}
document.getElementById('free-delivery').addEventListener('click', function () {
    updateDeliveryCost(0);
});
document.getElementById('charge-delivery').addEventListener('click', function () {
    updateDeliveryCost(20);
});

//Update Total Cost

function calculateTotal() {
    //Get ALl Price
    const basePrice = document.getElementById('best-price');
    const bestPrice = basePrice.innerText;
    const memoryCost = document.getElementById('memory-cost');
    const extraMemoryCost = memoryCost.innerText;
    const storageCost = document.getElementById('storage-cost');
    const extraStorageCost = storageCost.innerText;
    const deliveryCost = document.getElementById('delivery-cost');
    const extraDeliveryCost = deliveryCost.innerText;
    const totalBill = parseInt(bestPrice) + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(extraDeliveryCost);
    //Update Onclick Price
    const totalPrice = document.getElementById('total-cost');
    const newPrice = totalPrice.innerText;
    totalPrice.innerText = totalBill;
}

