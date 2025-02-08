
//fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json()).then(data => console.log(data))

async function loadData()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const responseJson = await response.json();

    console.log(responseJson);
}


loadData()