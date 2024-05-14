const apiKey='fLNkuXYChIIFlVSzKI4dQNKufBgjeBLp';
const baseUrl='https://api.giphy.com/v1/gifs/search'

const serachTextInput=document.getElementById('search-text');
const btnSearch=document.getElementById('btn-search');
const gifIfream=document.getElementById('gif-src');

const gifSearchAsync=async () => {
    const searchText=serachTextInput.value;
    if(searchText){
        const gifUrl=`${baseUrl}?api_key=${apiKey}&q=${searchText}`;
        const response=await fetch(gifUrl);
        const gifList=await response.json();
        const i=Math.floor(Math.random()*50);
        gifIfream.src=gifList.data[i].embed_url;
    }
}

const gifSearch=() => {
    const searchText=serachTextInput.value;
    if(searchText){
        const gifUrl=`${baseUrl}?api_key=${apiKey}&q=${searchText}`;
        fetch(gifUrl)
            .then(response => response.json())
            .then(gifList => {
                const i=Math.floor(Math.random()*50);
                gifIfream.src=gifList.data[i].embed_url;
            })
            .catch(e => {
                console.log(e);
            })
    }
}

btnSearch.addEventListener('click', gifSearchAsync);