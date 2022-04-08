export default class Section {
    constructor({data, renderer}, container) {
        this._initialArray = data;
        this._renderer = renderer;
        this._container = container;
    }

    rendererItems(){
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(item) {
        const card = this._renderer(item)
        this._container.prepend(card);
    }

    setItem(element) {
      this._container.append(element);
    }

    prepend(card){
        this._container.prepend(card);
    }
} 