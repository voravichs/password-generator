# password-generator

## Pseudocode
This program will produce a password after a user presses the generate password button. After pressing the button, user will be prompted to give certain criteria for the password before it is generated and shows up in the text box.

### Initialize
    
    Make generatePassword function
    declare starting variables: 
        lowAlphabet - global
        uppAlphabet - global 
        specChars - global
        numSet - global
        password (string) - local
        passwordLength - local
        useUppercase (bool) - local
        useLowercase (bool) - local
        useSpecial (bool) - local
        useNumbers (bool) - local
        lowerChars (arr) - local
        upperChars (arr) - local
        specialChars (arr) - local
        choices (arr) - local

### Password Length

    Add a prompt that will ask for number of characters, between 8 and 128
    If between 8 and 128, save that number to passwordLength
        else, abort
    
### Character Choices

    Prompt the user for whether they want lowercase/uppercase/special/number characters
    Add bool to choices array
    Repeat 4x for each character type

### Generating the Password

    
    We now a 1-4 character password depending on the user choices.
    Take the characters from choices and string them together in password var
    For the remaining length of the password between the current password and the desired password length,
        generate a new character based on current choices
        add it to the end of password
    Randomize the current password string
    Return the password for the function
    

        