import { Text, View } from 'react-native';
import React, {useState} from 'react';

// For form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4,"Min is 4 chars").max(16, "Max is 16 chars").required("Pass is required."),
});

export default function App(){

  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const genratePasswordString = (passwordLength:number)=>{
    let characterList = '';

    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const digitCharacters = "0123456789";
    const sprcialCharacters = "~!@#$%^&*()";

    if (upperCase) {
      characterList+=upperCase;
    }
    if (lowerCase) {
      characterList+=lowerCase;
    }
    if (numbers) {
      characterList+=numbers;
    }
    if (symbols) {
      characterList+=symbols;
    }

    const passwordResult = createPassword(characterList ,passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);

  };

  const createPassword = (characters: string, passwordLength: number)=>{
    
    let result='';
  
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random()*passwordLength);
      result+=characters.charAt(characterIndex);  
    }
  
    return result;
  
  };
  
  const resetPasswordState = ()=>{
    setPassword("");
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

return (
  <View>
    <Text>
      Password Generator
    </Text>
  </View>
);
}
