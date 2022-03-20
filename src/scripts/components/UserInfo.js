export default class UserInfo{
    constructor(aimName, aimDescription){
        this._aimName = aimName;
        this._aimDescription = aimDescription;
    }

    getUserInfo(){
        return {strName: this._aimName.textContent, strDescription: this._aimDescription.textContent};
    }

    setUserInfo({strName, strDescription}){
        this._aimName.textContent = strName;
        this._aimDescription.textContent = strDescription;
    }
}