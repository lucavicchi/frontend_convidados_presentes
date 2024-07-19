document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:8080/api/gifts') // Replace with the actual endpoint URL
        .then(response => response.json())
        .then(data => {
            console.log(data); // Logs the fetched JSON data to the console
            displayGiftList(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayGiftList(gifts) {
    const giftListContainer = document.getElementById('gift-list');

    gifts.forEach(gift => {
        const giftItem = document.createElement('div');
        giftItem.className = 'gift-item';

        const giftName = document.createElement('h3');
        giftName.textContent = gift.gift;

        const giftLink = document.createElement('a');
        giftLink.href = gift.giftUrl;
        giftLink.textContent = 'View Gift';
        giftLink.target = '_blank';

        const giftSegmentation = document.createElement('p');
        giftSegmentation.textContent = `Segmentation: ${gift.segmentation}`;

        const giftBought = document.createElement('p');
        giftBought.textContent = `Bought: ${gift.bought ? 'Yes' : 'No'}`;

        giftItem.appendChild(giftName);
        giftItem.appendChild(giftLink);
        giftItem.appendChild(giftSegmentation);
        giftItem.appendChild(giftBought);

        giftListContainer.appendChild(giftItem);
    });
}
