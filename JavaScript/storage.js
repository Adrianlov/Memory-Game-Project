let showClicks = document.getElementById('retriveClicks')


let clicks = localStorage.getItem('clicks')


showClicks.textContent = 'With ' +  clicks + ' Clicks'