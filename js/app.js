console.log('Word app is working');

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchHandler)
function searchHandler (){
    let searchTxt = document.getElementById('searchTxt');
    searchTxt.addEventListener('input', function () {
      let inputValue = search.value;
      console.log(inputValue);  
    })
    
}