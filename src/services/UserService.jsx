const RESTDB_API = '6216bed234fd621565858972'

async function GetData(data) {
    const res = await fetch(`https://react-53bc.restdb.io/rest/account?q=${JSON.stringify(data)}`,{
        headers: {
          'Content-Type': 'application/json',
          "x-apikey": RESTDB_API,
          "cache-control": "no-cache"              
        }
    });
    const result = await res.json();
    return result;
}

async function SaveUser(data) {
    const res = await fetch(`https://react-53bc.restdb.io/rest/account`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "x-apikey": RESTDB_API,
          "cache-control": "no-cache"              
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    return result._id;
}

async function UpdateUser(id, data){
    await fetch(`https://react-53bc.restdb.io/rest/account/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "x-apikey": RESTDB_API,
          "cache-control": "no-cache"              
        },
        body: JSON.stringify(data)
    });
}

export { GetData, SaveUser, UpdateUser };