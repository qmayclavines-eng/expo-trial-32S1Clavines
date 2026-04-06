import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput({ value, onChangeText, onAddGoal }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.buttonContainer}>
        <Button title="ADD GOAL" color="#5C6BC0" onPress={onAddGoal} />
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 15,
    color: "#333",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 110,
    height: 40,
    justifyContent: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
});