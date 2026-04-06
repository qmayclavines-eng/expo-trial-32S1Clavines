import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  function goalInputHandler(enteredText) {
    console.log(enteredText);
  };

  function addGoalHandler() {};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="#999"
          onChangeText={goalInputHandler}
        />
        <Button title="ADD GOAL" color="#4da6ff" />
      </View>
      <Text style={styles.listHeader}>List of Goals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 8,
  },
  inputContainer: {
    marginBottom: 4,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    marginBottom: 8,
    fontSize: 16,
    color: "#333",
  },
  listHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});