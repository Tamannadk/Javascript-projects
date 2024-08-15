const card=document.querySelector('.card')
const container=document.querySelector('.container')

let count=1;
function createAndAddCard()
{
    console.log('card')
    const cardNew=card.cloneNode(true);
    cardNew.innerText=count++;
    container.append(cardNew)
}

card.addEventListener('click',createAndAddCard)