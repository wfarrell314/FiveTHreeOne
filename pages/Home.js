import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.HomeScreen}>
          <Text>Home Screen</Text>
          <Button
           title="Calculate One Rep Max"
            onPress={() => navigation.navigate('OneRepMax')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    HomeScreen: { backgroundColor: "white",flex: 1, alignItems: "center", justifyContent: "center" }
});

export default HomeScreen