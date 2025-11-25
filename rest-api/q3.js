// Q3 Auth Fetch
async function createPost()
{
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                    'Authorization':'Bearer 12345'
                                },
                                });
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error("Error occur:", error);
    }
}

createPost().then(result => console.log(result));