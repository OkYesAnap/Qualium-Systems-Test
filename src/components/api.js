
const urlPref ="http://localhost:3001/"

class Api {
    reqGet (url) {
        return fetch(urlPref + url, {
            method: "GET",
            header: { 'Content-Type': 'application/json' },
        }).then(data => data.json())
    };
    reqGetOption (url, option) {
        return fetch(urlPref + url, {
            method: "POST",
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(option)
        }).then(data => data.json())
    };
    reqPOST (url, data) {
        return fetch(urlPref + url, {
          method: "POST",
          header: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
    }         
}



export default Api;