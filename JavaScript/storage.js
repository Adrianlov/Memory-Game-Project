let showClicks = document.getElementById('retriveClicks')


let clicks = localStorage.getItem('clicks')

let retriveClicks = JSON.parse(clicks)


showClicks.textContent = 'With ' +  retriveClicks + ' Clicks'


showClicks.textContent = 'With ' +  clicks + ' Clicks'
