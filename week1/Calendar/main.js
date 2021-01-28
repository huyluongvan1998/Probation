const calenderContainer = document.querySelector('.container');
const btn_click = document.querySelector('.btn-click');
const btn_reset = document.querySelector('.btn-reset');
const calendarSize = 24;
 
const changeImg = () => {
    for(let i = 0; i < calendarSize ; i++){
        let calendarCard = document.createElement('div');
        let calendarContent = document.createElement('div');
        let elementImg = `url('./images/course-${i+1}.png')`
        //style each element in the grid
        calendarCard.classList.add('card');
        calendarCard.style.gridArea = `el${i+1}`;
    
        //insert text to each element;
        calendarContent.classList.add('content');
        calendarContent.innerHTML = `${i+1}`

        //Content variable for click
         
        
        calendarContent.addEventListener('click', (e) => contentChange(e,elementImg))
        
        
        //reset the image of content
        calendarCard.style.backgroundImage ='none';
        
        //DOM session        
        //add content to card.
        calendarCard.appendChild(calendarContent);
        //append to appear to screen
        calenderContainer.appendChild(calendarCard);
    }
}
const contentChange = (event, img) => {
    event.target.parentNode.style.backgroundImage = img;
    event.target.style.opacity = '0';
    event.target.style.backgroundColor = 'rgba(243, 72, 38, 0.8)';
}
const resetCalendar = () => {
    let check = document.querySelectorAll('.card');
    check.forEach(el => {
        el.remove();
    })

}


btn_click.addEventListener('click', changeImg);
btn_reset.addEventListener('click', resetCalendar);
