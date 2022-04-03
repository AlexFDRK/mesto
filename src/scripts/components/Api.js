export class API{
    constructor(url, headers){
        this._url = url;
        this._headers = headers;
    }

    _makeRequest(promis){
        return promis.then((res) => {
            if (res.ok){
                const answ = res.json();
                return answ;
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }).then((obj) => {
            return obj;
        });
    }

    get(){
        const promis = fetch(
            this._url, 
            {
                method: 'GET',
                headers: this._headers
            }
        );

        return this._makeRequest(promis);
    }

    patch(body){
        const promis = fetch(
            this._url, 
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify(body)
            }
        );
        
        return this._makeRequest(promis);
    }

    avatar(body){

    }

    post(body){
        const promis = fetch(
            this._url, 
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify(body)
            }
        );

        return this._makeRequest(promis);
    }

    delete(id){
        let url = this._url + '/' + id;
        const promis = fetch(
            url, 
            {
                method: 'DELETE',
                headers: this._headers
            }
        );

        return this._makeRequest(promis);
    }

    like(id){
        let url = this._url + '/' + id + '/likes';
        const promis = fetch(
            url, 
            {
                method: 'PUT',
                headers: this._headers
            }
        );

        return this._makeRequest(promis);
    }

    dislike(id){
        let url = this._url + '/' + id + '/likes';
        const promis = fetch(
            url, 
            {
                method: 'DELETE',
                headers: this._headers
            }
        );

        return this._makeRequest(promis);
    }
}