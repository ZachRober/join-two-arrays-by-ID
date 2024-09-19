let arr1 = [{id:1,value:5},{id:3,value:12},{id:5,value:2},{id:7,value:3}];
let arr2 = [{id:1,value:10},{id:2,value:6},{id:3,value:9},{id:4,value:8}];
let newarr=[];

function combineArrays(x,y){
    for (let i = 0; i < x.length; i++) {
        let findSome = newarr.some(a=>a.id===x[i].id);
        let index = newarr.findIndex(a=>a.id===x[i].id);
        if (findSome===false){
            newarr.push(x[i]);
        }
        else{
        newarr[index].value += x[i].value;
        }
        console.log(newarr);
    }
    for (let i = 0; i < y.length; i++) {
        let findSome = newarr.some(a=>a.id===y[i].id);
        let index = newarr.findIndex(a=>a.id===y[i].id);
        if (findSome===false){
            newarr.push(y[i]);
        }
        else{
        newarr[index].value += y[i].value;
        }
        console.log(newarr);
}

console.log(sortedArray);
return;
}
combineArrays(arr1,arr2);