const form = document.querySelector('form');
const addressInput = document.getElementById('address')! as HTMLInputElement;
function searchAddressHandler(event){
    event.preventDefault();
    const enterAddress = addressInput.value;
}
form?.addEventListener('submit',searchAddressHandler);