// 图书馆
// 私有方法: _funName() {}
function Book(isbn, title, author) {
    this._setIsbn(isbn);
    this.title = title || '未给标题';
    this.author = author || '未给作者';
}

Book.prototype._setIsbn = function(isbn) {
    if (this._checkIsbn()) {
        this.isbn = isbn
    } else {
        throw new Error('isbn 有误')
    }
}

Book.prototype._checkIsbn = function(isbn) {
    return /[0-9]{10}/.test(isbn)
}

Book.prototype.borrow = function() {

}

Book.prototype.getTitle = function() {
    return this.title
}

Book.prototype.getAuthor = function() {
    return this.author
}

var book = new Book('ecit1212', '三国演义', '罗贯中');