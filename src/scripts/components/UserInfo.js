export default class UserInfo{
    constructor(aimName, aimDescription, aimAvatar){
        this._aimName = aimName;
        this._aimDescription = aimDescription;
        this._aimAvatar = aimAvatar;
    }

    getUserInfo(){
        return {strName: this._aimName.textContent, 
                strDescription: this._aimDescription.textContent, 
                strAvatar: this._aimAvatar.src};
    }

    getUserId(){
        return this._data._id;
    }

    setUserInfoNotUsed({strName, strDescription}){
        this._aimName.textContent = strName;
        this._aimDescription.textContent = strDescription;
    }

    setUserInfo(data){
        this._data = data;
        this._aimName.textContent = data.name;
        this._aimDescription.textContent = data.about;
        this._aimAvatar.src = data.avatar;
    }

    setAvatar(avatar){
        this._aimAvatar.src = avatar; 
    }
}