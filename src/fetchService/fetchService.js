import router from "../router.js";
export default {
    baseLink : 'https://api.apiforge.net/v1/api',
    id : localStorage.getItem('id'),

    get: async function (endPoint){
        const response = await fetch(this.baseLink + endPoint,{
            method: 'GET',
            headers: getHeaders()
        })
        if(!response.ok && response.status === 401){
            localStorage.removeItem('token');
            router.push('/food_delivery/login')
        }
            const data = await response.json();
            return data
        
    },
    post: async function(endPoint,body){
            const response = await fetch(this.baseLink + endPoint,{
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify(body)
            })
            if(!response.ok && response.status === 401){
                localStorage.removeItem('token');
                router.push('/food_delivery/login')
            }
                const data = await response.json();
                return data
    },
    put: async function(endPoint, body){
        const response = await fetch(this.baseLink + endPoint,{
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(body)
        })
        if(!response.ok && response.status === 401){
            localStorage.removeItem('token');
        }else if(response.status === 401){
            localStorage.removeItem('token');
        }
            const data = await response.json();
            return data
        
    },
    delete: async function(endPoint){
        const response = await fetch(this.baseLink + endPoint, {
            method: 'DELETE',
            headers: getHeaders(),
        })
        if(!response.ok && response.status === 401){
            localStorage.removeItem('token');
        }else if(response.status === 401){
            localStorage.removeItem('token');
        }else{
            const data = await response.json();
            return data
        }
    }
}

function getHeaders(){
    const api_key = '65fb08b9df7bc89ef3a6f520'
    const token = localStorage.getItem('token');

    return {
        'Content-type' : 'application/json',
        'api_key': api_key,
        'authorization': `Bearer ${token}`
    }
}
