document.getElementById('blog').addEventListener('click', function(){

    window.location.href = 'blog.html';
})





// common function

function getInput(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function showSection(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// card1
document.getElementById('donate-btn').addEventListener('click', function(){

    // common function added
const donateAmouunt = parseFloat(getInput('donate-amount'));

if(donateAmouunt > 0 && donateAmouunt !== 'string' && donateAmouunt <= balance.innerText && donateAmouunt!=balance.innerText){
    const balance = parseFloat(document.getElementById('balance').innerText);

    const totalBalance =  balance - donateAmouunt;
    
    const totalAmount = document.getElementById('balance');
    totalAmount.innerText = totalBalance;

    const donateAmount = parseFloat(document.getElementById('donate-balance').innerText);
    const totalDonate = donateAmount + donateAmouunt;

    const totalDonateAmount = document.getElementById('donate-balance');
    totalDonateAmount.innerText = totalDonate;
  
    document.getElementById('my_modal_1').showModal();

   const historyContainer = document.getElementById('history');

  const createDiv = document.createElement('div');
  const date = new Date();
  const newDate = date.toString();

  createDiv.innerHTML = `
  
  <div class="border rounded-lg p-8 w-[80%] mx-auto mb-5">
  <h1 class="font-bold text-xl">${donateAmouunt} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
  
  <p class="text-gray-400">${newDate}</p>
  
  </div>
  
  `
  historyContainer.appendChild(createDiv);

}
else{
    alert('Invalid Amount!!');
}

})


// card2

document.getElementById('donate-btn2').addEventListener('click', function(){

     // common function added
    const donateAmouunt2 = parseFloat(getInput('donate-amount2'));
    
    if(donateAmouunt2 >= 0 && donateAmouunt2 !== 'string'&& donateAmouunt2 <= balance.innerText && donateAmouunt2!=balance.innerText){
        const balance2 = parseFloat(document.getElementById('balance').innerText);
    
        const totalBalance2 =  balance2 - donateAmouunt2;
        
        const totalAmount2 = document.getElementById('balance');
        totalAmount2.innerText = totalBalance2;
    
        const donateAmount2 = parseFloat(document.getElementById('donate-balance2').innerText);
        const totalDonate2 = donateAmount2 + donateAmouunt2;
    
        const totalDonateAmount2 = document.getElementById('donate-balance2');
        totalDonateAmount2.innerText = totalDonate2;
        document.getElementById('my_modal_1').showModal();


        const historyContainer = document.getElementById('history');

  const createDiv = document.createElement('div');
  const date = new Date();
  const newDate = date.toString();

  createDiv.innerHTML = `
  
  <div class="border rounded-lg p-8 w-[80%] mx-auto mb-5">
  <h1 class="font-bold text-xl">${donateAmouunt2} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
  
  <p class="text-gray-400">${newDate}</p>
  
  </div>
  
  `
  historyContainer.appendChild(createDiv);
    }
    else{
        alert('Invalid Amount!!');
    }
    
    })

    
     // card3

document.getElementById('donate-btn3').addEventListener('click', function(){


     // common function added
    const donateAmouunt3 = parseFloat(getInput('donate-amount3'));
    
    if(donateAmouunt3 >= 0 && donateAmouunt3 !== 'string'&& donateAmouunt3 <= balance.innerText && donateAmouunt3!=balance.innerText){
        const balance3 = parseFloat(document.getElementById('balance').innerText);
    
        const totalBalance3 =  balance3 - donateAmouunt3;
        
        const totalAmount3 = document.getElementById('balance');
        totalAmount3.innerText = totalBalance3;
    
        const donateAmount3 = parseFloat(document.getElementById('donate-balance3').innerText);
        const totalDonate3 = donateAmount3 + donateAmouunt3;
    
        const totalDonateAmount3 = document.getElementById('donate-balance3');
        totalDonateAmount3.innerText = totalDonate3;
        document.getElementById('my_modal_3').showModal();

        const historyContainer = document.getElementById('history');

  const createDiv = document.createElement('div');
  const date = new Date();
  const newDate = date.toString();

  createDiv.innerHTML = `
  
  <div class="border rounded-lg p-8 w-[80%] mx-auto">
  <h1 class="font-bold text-xl">${donateAmouunt3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
  
  <p class="text-gray-400">${newDate}</p>
  
  </div>
  
  `
  historyContainer.appendChild(createDiv);

        
    }
    else{
        alert('Invalid Amount!!');
    }
    
    })

    // toggle button
    const historyTab = document.getElementById('history-tab');
    historyTab.addEventListener('click', function(){

        historyTab.classList.add('btn', 'bg-[#B4F461]', 'font-bold', 'text-xl', 'text-black')
        historyTab.classList.remove('btn-outline', 'text-gray-400')

    const donateTab = document.getElementById('donate-tab');
    donateTab.classList.remove('bg-[#B4F461]','text-black');    
    donateTab.classList.add('btn-outline', 'text-gray-400');    

    })

    const donateTab = document.getElementById('donate-tab');
    donateTab.addEventListener('click', function(){

        donateTab.classList.add('btn', 'bg-[#B4F461]', 'font-bold', 'text-xl', 'text-black')
        donateTab.classList.remove('btn-outline', 'text-gray-400')
        historyTab.classList.remove('bg-[#B4F461]','text-black');    
       historyTab.classList.add('btn-outline', 'text-gray-400');

       showSection('donate');
    })

//    history

document.getElementById('history-tab').addEventListener('click', function(){

showSection('history');

})
