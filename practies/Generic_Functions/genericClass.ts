class DataStorage<T> {
    private data:T[] =[];
    addItem(item:T){
        this.data.push(item);
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItem(){
        return [...this.data];
    }

}
let stringStorage = new DataStorage;
stringStorage.addItem("Kumar");
stringStorage.addItem("Surya");
console.log(stringStorage.getItem())
stringStorage.removeItem("Kumar");
console.log(stringStorage.getItem())
