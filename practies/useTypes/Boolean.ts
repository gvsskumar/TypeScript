const allow = true;

const userPermission = (arg:boolean) =>{
    console.log(arg);
    (arg)?console.log('Accessed All Permissions'):console.log('Not Accessed All Permissions')
}
console.log(userPermission(allow)); 
