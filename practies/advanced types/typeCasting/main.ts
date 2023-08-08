
// Input Element add text 2way
// Method -1 
const inputBox = <HTMLInputElement>document.getElementById('text-id')!;
inputBox.value="Hi there!";

// Method -2 
const inputBox2 = document.getElementById('text2')! as HTMLInputElement;
inputBox2.value="Welcome typeCast";