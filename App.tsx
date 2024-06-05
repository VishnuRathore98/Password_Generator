import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

// For working with forms
import { Formik } from 'formik';
import  BouncyCheckbox  from 'react-native-bouncy-checkbox';

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
    const specialCharacters = "~!@#$%^&*()";

    if (upperCase) {
      characterList+=upperCaseCharacters;
    }
    if (lowerCase) {
      characterList+=lowerCaseCharacters;
    }
    if (numbers) {
      characterList+=digitCharacters;
    }
    if (symbols) {
      characterList+=specialCharacters;
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
  <ScrollView>
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Password Generator</Text>
          {/* <Formik></Formik> */}
      </View>
    </SafeAreaView>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});