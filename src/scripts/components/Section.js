export default class Section {
    constructor({data, renderer}, containerSelector) {
        this._initialArray = data;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    rendererItems(){
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }
  
    setItem(element) {
      this._container.append(element);
    }

    prepend(card){
        this._container.prepend(card);
    }
} 