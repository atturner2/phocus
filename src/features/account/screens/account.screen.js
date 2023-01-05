import {  Button, Text, StyleSheet} from 'react-native';
import { AuthenticationContext } from "../../../services/authentication.context";
import {React, useContext} from "react";


export const AccountScreen = ( navigation ) => {
    const { handleLogout } = useContext(AuthenticationContext);

    return(
    <Button
  title="logout"
  onPress={() => handleLogout()}
  style={styles.button}
  >
  <Text style={styles.buttonText}>Logout</Text>
  </Button>
  )
};
const styles = StyleSheet.create({
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  });