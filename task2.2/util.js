function isArray(arr) {
    return (arr instanceof Array);
}

function isFunction(fn) {
    return (fn instanceof Function);
}
function cloneObject(src) {
    var result;
    if (typeof src == "object") {
        for(var i in src){
            if(typeof src[i]=="object"){
                result={};
                result[i]=cloneObject(src[i]);
            }else{
                result[i]=src[i];
            }
        }
    }else{
        result=src;
    }
    return result;
}

function uniqArray(arr) {
    var uniq=[]
    for(var i in arr){
       if(uniq.indexOf(arr[i])== -1){
           uniq.push(arr[i])
       }
    }
    return uniq
}