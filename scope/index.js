var foo = function() {
    var a = 3, b = 5;

    var bar = function() {
        var a = 4, b = 6;
        console.log('a ' + a + ', b ' + b);
    }()

    console.log('a ' + a + ', b ' + b);
}()