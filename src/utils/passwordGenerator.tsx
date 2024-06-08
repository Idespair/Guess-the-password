export function PasswordGenerator() {
    // Variable with all available characters that can make part of the password
    const availableCharacters: string = "ABCDEF";

    // Function to generate a random password of given length
    const generatePassword = (length: number) => {
        let finalPassword: string[] = [];

        for (let i = 0; i < length; i++) {
            // Generate a random index within the range of availableCharacters
            const randIndex: number = Math.floor(Math.random() * availableCharacters.length);

            // Get the character at the random index and push it to finalPassword
            const randomChar: string = availableCharacters.charAt(randIndex);
            finalPassword.push(randomChar);
        }

        return finalPassword;
    }

    // Generate a password of length 4 by default
    return generatePassword(4);
}


