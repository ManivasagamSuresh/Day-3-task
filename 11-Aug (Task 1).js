var m ={
    name : 'mani',
    age : 23,
    edu : 'BE Auto',
    city : 'Madurai' ,
}


//for in

for (var i in m)
{
    console.log(i,m[i]);
    
}

// for of 

console.log(Object.keys(m));
console.log(Object.values(m));


for (var i of Object.keys(m))
{
    console.log(i,m[i]);
}

// forEach

Object.keys(m).forEach(function (i)
{console.log(i,m[i]);}

)

// Arrays 


 var marks=[45,56,78,83,90];
for (var i in marks)
{
    console.log(i,marks[i]);
}


for (var i of marks)
{
    console.log(i);
}

marks.forEach( function
(i){
    console.log(i);
})