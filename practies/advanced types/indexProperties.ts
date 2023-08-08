interface ErrorContainer {
    [prop:string]:string;
}
const errorBag:ErrorContainer ={
    email:'Not a valid email!',
    username:'Must start with character'
}
console.log(errorBag); // { email: 'Not a valid email!', username: 'Must start with character' }

// Excuted cmd :  tsc.cmd Watch.ts --watch (or) tsc.cmd Watch.ts -w