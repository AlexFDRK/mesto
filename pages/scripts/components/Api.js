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

    getUser(){
        return this.get('https://' + this._url + 'users/me');
    }

    getCard(){
        return this.get('https://mesto.' + this._url + 'cards');
    }

    get(url){
        const promis = fetch(
            url, 
            {
                method: 'GET',
                headers: this._headers
            }
        );

        return this._makeRequest(promis);
    }

    patchAvatar(body){
        return this.patch('https://mesto.' + this._url + 'users/me/avatar', body); 
    }

    patchProfile(body){
        return this.patch('https://mesto.' + this._url + 'users/me', body); 
    }

    patch(url, body){
        const promis = fetch(
            url, 
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify(body)
            }
        );
        
        return this._makeRequest(promis);
    }

    postCard(body){
        const url = 'https://mesto.' + this._url + 'cards';
        const promis = fetch(
            url, 
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify(body)
            }
        );

        return this._makeRequest(promis);
    }

    deleteCard(id){
        const url = 'https://mesto.' + this._url + 'cards' + '/' + id;
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
        let url = 'https://mesto.' + this._url + '/cards/' + id + '/likes';
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
        let url = 'https://mesto.' + this._url + '/cards/' + id + '/likes';
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