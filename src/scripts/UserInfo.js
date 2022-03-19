export default class UserInfo{
    constructor({strName, strDescription}){
        this.strName = strName;
        this.strDescription = strDescription;
    }

    getUserInfo(){
        return {strName: this._strName, strDescription: this._strDescription};
    }

    setUserInfo({strName, strDescription}){
        this.strName = strName;
        this.strDescription = strDescription;
    }
}