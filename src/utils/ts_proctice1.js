
const memo = function(fn){
    const cache = {};
    return function(key){
        if(!cache[key]){
            cache[key]= fn.apply(this,arguments);
        }
        return cache[key]
    }
}

const acfun = function(a){
    if(a<=2){
        return 1;
    }
    console.log('s');
    return acfun(a-1) + acfun(a-2);
}

let f = memo(acfun)
console.log(f(6));
console.log('----')
console.log(f(6));
