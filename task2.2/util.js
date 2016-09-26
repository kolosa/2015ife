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
    var uniq=[];
    for(var i in arr){
       if(uniq.indexOf(arr[i])== -1){
           uniq.push(arr[i]);
       }
    }
    return uniq;
}
function simpleTrim(str) {
    for(var i in str){
        if(str.charAt(i)!=''&&str.charAt(i)!='\t'){
            break
        }
        str=str.substring(i,str.length-1)
    }
    for(var i=str.length;i>0; i--){
        if(str.charAt(i)!=''&&str.charAt(i)!='\t'){
            break
        }
        str=str.substring(0,i)
    }
    return str
}
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function each(arr,fn){
    for(var i in arr){
        fn(arr[i],i)
    }
}

function getObjectLength(obj) {
    var num=0;
    for(var i in obj){
        num++
    }
    return num;
}
function isEmail(emailStr) {
    var email=/^([\w\.\-]+)@(\w\.\-])\.([a-z/A-Z]{2,4})$/
    return email.test(emailStr)
}
function isMobilePhone(phone) {
    var phonenum=/^1\d{11}$/
    return phonenum.test(phone)
}