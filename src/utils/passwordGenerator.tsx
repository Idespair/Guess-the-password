export function PasswordGenerator(){

    //Variable with all available characters that can make part of the password
    var availableCharacters: string = "❤️💛💚💙💜🖤🤍🤎🧡";

    //Array that will receive the password of 4 hearts
    var FinalPassword: string[] = [];


    let i = 0;
    while(i < 5){
        //Variable that will hold a random value of 1 to the length of the array 
        let rand:number = (Math.random() * availableCharacters.length);

        //Variable that will take the random correspondent value of the array to the final password
        let pusher:string = availableCharacters.charAt(rand);

        FinalPassword.push(pusher);
        i++; 
    }
    return FinalPassword;
}

