
document.addEventListener('DOMContentLoaded', () => {
   const btn = document.querySelector("#btn");
   const resultDiv = document.querySelector("#resultDiv");
   const priceDisplay = document.querySelector("#priceDisplay");
   const remittanceDisplay = document.querySelector("#remittanceDisplay");
   const profitDisplay = document.querySelector("#profitDisplay");
   const itemsDisplay = document.querySelector("#itemsDisplay");
   const CODDisplay = document.querySelector("#CODDisplay");
   const btnCopy = document.querySelector("#btn-copy")
   const btnCopyAll = document.querySelector("#btn-copy-all")
   const btnReset = document.querySelector("#btn-reset")
   const copyContainer = document.querySelector("#copy-container")

   let finalPrice = 0
   let finalRemit = 0
   let finalProfit = 0

   resultDiv.style.display = 'none';
   copyContainer.style.display = 'none';

   let productInfo = []

    btn.addEventListener('click', () => {

        let totalPrice = 0
        let totalItems = 0
        let remittance = 0
        let profit = 0

        const data = [
            {
                name: 'Miracle Lotion Big',
                quantity: document.getElementById('lotionBig').value,
                price: parseInt(document.getElementById('lotionBig').value * 135),
                remit: 120,
            },
            {
                name: 'Miracle Lotion Small',
                quantity: document.getElementById('lotionSmall').value,
                price: parseInt(document.getElementById('lotionSmall').value * 70),
                remit: 60,
            },
            {
                name: 'Tuba-Tuba Big',
                quantity: document.getElementById('tubaBig').value,
                price: parseInt(document.getElementById('tubaBig').value * 130),
                remit: 110,
            },
            {
                name: 'Tuba-Tuba Small',
                quantity: document.getElementById('tubaSmall').value,
                price: parseInt(document.getElementById('tubaSmall').value * 65),
                remit: 50,
            },
            {
                name: 'Healing Wonder Drops',
                quantity: document.getElementById('drops').value,
                price: parseInt(document.getElementById('drops').value * 60),
                remit: 50,
            },
            {
                name: 'Gingko Biloba Oil',
                quantity: document.getElementById('gingko').value,
                price: parseInt(document.getElementById('gingko').value * 130),
                remit: 110,
            },
            {
                name: 'Lemon Rub',
                quantity: document.getElementById('lemonRub').value,
                price: parseInt(document.getElementById('lemonRub').value * 45),
                remit: 25,
            },
            {
                name: 'Coco Milk Soap',
                quantity: document.getElementById('milkSoap').value,
                price: parseInt(document.getElementById('milkSoap').value * 45),
                remit: 25,
            },
            {
                name: 'Coco Derma Cream',
                quantity: document.getElementById('cream').value,
                price: parseInt(document.getElementById('cream').value * 140),
                remit: 130,
            },
            {
                name: 'Detox Cleansing',
                quantity: document.getElementById('detox').value,
                price: parseInt(document.getElementById('detox').value * 215),
                remit: 190,
            },
            {
                name: 'Melter Capsule',
                quantity: document.getElementById('melter').value,
                price: parseInt(document.getElementById('melter').value * 215),
                remit: 190,
            },
            {
                name: 'Better Vision',
                quantity: document.getElementById('betterVision').value,
                price: parseInt(document.getElementById('betterVision').value * 215),
                remit: 190,
            },
            {
                name: 'AX5 Capsule',
                quantity: document.getElementById('ax5').value,
                price: parseInt(document.getElementById('ax5').value * 215),
                remit: 190,
            },
            {
                name: 'Pro kidney Capsule',
                quantity: document.getElementById('proKidney').value,
                price: parseInt(document.getElementById('proKidney').value * 215),
                remit: 190,
            },
            {
                name: 'Vitamin C Plus',
                quantity: document.getElementById('vitC').value,
                price: parseInt(document.getElementById('vitC').value * 215),
                remit: 190,
            },
            {
                name: 'Barley Capsule',
                quantity: document.getElementById('barley').value,
                price: parseInt(document.getElementById('barley').value * 215),
                remit: 190,
            },
        ]

        productInfo = data

        totalPrice = data.reduce((sum, item) => sum + item.price, 0);

        const tableBody = document.querySelector("#product-list");

        for (let i = 0; i < data.length; i++) {
            if (data[i].quantity > 0) {
                totalItems += parseInt(data[i].quantity)
                remittance += data[i].remit * data[i].quantity

                console.log(data[i])

                const row = document.createElement('tr');

                row.innerHTML = `
                    <th scope="row">${data[i].quantity}</th>
                    <td>${data[i].name}</td>
                    <td>₱${data[i].price}</td>
                    <td>₱${data[i].remit * data[i].quantity}</td>
                `;

                tableBody.appendChild(row);
            }
        }

        profit = totalPrice - remittance;

        if (totalPrice > 0) {
            resultDiv.style.display = 'flex';
            priceDisplay.innerHTML = `₱${totalPrice + 1000}`;
            CODDisplay.innerHTML = `₱${totalPrice + 1000}`;
            remittanceDisplay.innerHTML = `₱${remittance}`;
            profitDisplay.innerHTML = `₱${profit}`;
            itemsDisplay.innerHTML = `${totalItems}pcs`;
            finalPrice = totalPrice + 1000;
            finalRemit = remittance;
            finalProfit = profit;
            btn.disabled = true;
        }
        
    })
    
    btnCopy.addEventListener('click', () => {

        const tempTextArea = document.createElement('textarea');

        let tempArray = []

        for (let i = 0; i < productInfo.length; i++) {
            if (productInfo[i].quantity > 0) {
                const newData = `${productInfo[i].name}: ${productInfo[i].quantity}`;    
                tempArray.push(newData);
            }
        }
 
        const result = tempArray.join('\n');

        const finalResult = `NAME: OSCAR DUHILING HANDUMON \nCONTACT: 09295019814\nLBC BRANCH: gaisano liloan lbc branch \nCOD: ₱${finalPrice}\n\nORDERED LIST: \n${result}\n`;
        

        tempTextArea.value = finalResult;

        copyContainer.style.display = 'flex';

        setTimeout(() => {
            copyContainer.style.display = 'none';
        }, 2000);

        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
    })

    btnCopyAll.addEventListener('click', () => {

        const tempTextArea = document.createElement('textarea');

        let tempArray = []

        for (let i = 0; i < productInfo.length; i++) {
            if (productInfo[i].quantity > 0) {
                const newData = `${productInfo[i].name}: ${productInfo[i].quantity}`;    
                tempArray.push(newData);
            }
        }
 
        const result = tempArray.join('\n');

        const finalResult = `INFORMATION TEMPLATE \nREMITTANCE: ${finalRemit} \nPRICE: ${finalPrice} \nPROFIT: ${finalProfit} \n\nNAME: OSCAR DUHILING HANDUMON \nCONTACT: 09295019814\nLBC BRANCH: gaisano liloan lbc branch \nCOD: ₱${finalPrice + 1000}\n\nORDERED LIST: \n${result}\n`;
        
        tempTextArea.value = finalResult;

        copyContainer.style.display = 'flex';

        setTimeout(() => {
            copyContainer.style.display = 'none';
        }, 2000);

        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
    })

    btnReset.addEventListener('click', () => {
        location.reload();
        
    })
    
})

