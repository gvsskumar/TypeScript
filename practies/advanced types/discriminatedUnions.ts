interface Bird {
    type:'bird';
 flyingSpeed:number;
}

interface Horse {
    type:'horse';
    runningSpeed:number;
}

type Animal = Bird | Horse;

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed=animal.runningSpeed;
            break;
    }
    console.log(speed);
}
moveAnimal({type:'bird',flyingSpeed:10})
moveAnimal({type:'horse',runningSpeed:100})
// Excuted cmd :  tsc.cmd Watch.ts --watch (or) tsc.cmd Watch.ts -w

//Note: Multiple Interface common property is called then using switch case conditions