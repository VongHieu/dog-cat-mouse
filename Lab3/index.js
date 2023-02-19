function dog(){
    this.name = 'pubdle'
    this.stomach = []
    
}
dog.prototype.eat = function(com){
    this.stomach.push(com)
}
