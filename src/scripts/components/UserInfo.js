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

    setUserInfo(data){
        this._data = data;
        this._aimName.textContent = data.name;
        this._aimDescription.textContent = data.about;
        this._aimAvatar.src = data.avatar;
    }
}