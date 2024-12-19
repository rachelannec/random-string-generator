// https://programiz.com/javascript/examples/generate-random-strings/
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp - will only work in textareas and input fields

document.querySelector('#generatorContainer form').addEventListener('submit', function(event){
    event.preventDefault();
    const length = parseInt(document.getElementById('length').value);
    const resultGenerate = document.getElementById('resultGenerate');
    

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateRandomString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i<length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        // console.log(result)
        return result;
        
       

    }
    resultGenerate.textContent = generateRandomString(length);




    // adding copy to clipboard functionality
    const generatedString = generateRandomString(length);
    resultGenerate.textContent = generatedString;
    const copyButton = document.getElementById('copyButton');

    copyButton.style.display='block';




    function copyToClipboard() {
        // temporary textarea
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = generatedString;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // for mobile dev
        document.execCommand('copy'); // copu text to clipboard
        document.body.removeChild(tempTextarea); // remove temporary textarea

        // alert('Copied to clipboard!');
    } 

    copyButton.addEventListener('click', copyToClipboard, {once: true});  



    

    
});