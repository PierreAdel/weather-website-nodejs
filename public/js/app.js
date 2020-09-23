console.log('client side js is loaded')




const weatherForm = document.querySelector('form') // matches first element
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') // matches by id
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
  
    const location = search.value
    messageOne.textContent ="Searching for: " + location
    messageTwo.textContent ="Please wait"

    fetch('/weather?address='+location).then((response) =>
{

    response.json().then((data) =>
    {
       
        if(data.error)
        {
            messageOne.textContent = data.error +", try searching for another location."
            return messageTwo.textContent =""
            

        }
        messageOne.textContent ="Location: "+ data.location
        messageTwo.textContent =""+ data.condition
       
    })
})



})

 