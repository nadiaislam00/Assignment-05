document.getElementById('donate-btn').addEventListener('click', function(){

const donateAmouunt = parseFloat(document.getElementById('donate-amount').value);

if(donateAmouunt >= 0 && donateAmouunt !== 'string'){
    const balance = parseFloat(document.getElementById('balance').innerText);

    const totalBalance =  balance - donateAmouunt;
    
    const totalAmount = document.getElementById('balance');
    totalAmount.innerText = totalBalance;

    const donateAmount = parseFloat(document.getElementById('donate-balance').innerText);
    const totalDonate = donateAmount + donateAmouunt;

    const totalDonateAmount = document.getElementById('donate-balance');
    totalDonateAmount.innerText = totalDonate;
    donateAmouunt = '';
}
else{
    alert('Invalid Amount!!');
}

})
// card2

document.getElementById('donate-btn2').addEventListener('click', function(){

    const donateAmouunt2 = parseFloat(document.getElementById('donate-amount2').value);
    
    if(donateAmouunt2 >= 0 && donateAmouunt2 !== 'string'){
        const balance2 = parseFloat(document.getElementById('balance').innerText);
    
        const totalBalance2 =  balance2 - donateAmouunt2;
        
        const totalAmount2 = document.getElementById('balance');
        totalAmount2.innerText = totalBalance2;
    
        const donateAmount2 = parseFloat(document.getElementById('donate-balance2').innerText);
        const totalDonate2 = donateAmount2 + donateAmouunt2;
    
        const totalDonateAmount2 = document.getElementById('donate-balance2');
        totalDonateAmount2.innerText = totalDonate2;
    }
    else{
        alert('Invalid Amount!!');
    }
    
    })

    // card3

    
document.getElementById('donate-btn3').addEventListener('click', function(){

    const donateAmouunt3 = parseFloat(document.getElementById('donate-amount3').value);
    
    if(donateAmouunt3 >= 0 && donateAmouunt3 !== 'string'){
        const balance3 = parseFloat(document.getElementById('balance').innerText);
    
        const totalBalance3 =  balance3 - donateAmouunt3;
        
        const totalAmount3 = document.getElementById('balance');
        totalAmount3.innerText = totalBalance3;
    
        const donateAmount3 = parseFloat(document.getElementById('donate-balance3').innerText);
        const totalDonate3 = donateAmount3 + donateAmouunt3;
    
        const totalDonateAmount3 = document.getElementById('donate-balance3');
        totalDonateAmount3.innerText = totalDonate3;
    }
    else{
        alert('Invalid Amount!!');
    }
    
    })

    const historyTab = document.getElementById('history-tab');
    historyTab.addEventListener('click', function(){

        historyTab.classList.add('btn', 'bg-[#B4F461]', 'font-bold', 'text-xl', 'text-black')
        historyTab.classList.remove('btn-outline', 'text-gray-400')

    const donateTab = document.getElementById('donate-tab');
    donateTab.classList.remove('bg-[#B4F461]','text-black');    
    donateTab.classList.add('btn-outline', 'text-gray-400');    

    })
