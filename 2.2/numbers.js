var array = new Array(999);

for (var i=2 ; i<=array.length-1; i++) {
    if((i%2===0) || (i%3===0))
    continue;
document.writeln(i+"...{[-.+]}");
}
