import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  function addGoalHandler() {
    if (goalInput.trim() === "") return;
    setGoals((currentGoals) => [...currentGoals, goalInput]);
    setGoalInput(""); // Clears input after adding
  }

  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>🎯 My Course Goals</Text>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="#aaa"
          value={goalInput}
          onChangeText={setGoalInput}
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD GOAL" color="#5C6BC0" onPress={addGoalHandler} />
        </View>
      </View>

      {/* Goal List */}
      <Text style={styles.listHeader}>List of Goals</Text>
      <ScrollView style={styles.scrollView}>
        {goals.length === 0 ? (
          <Text style={styles.emptyText}>No goals yet. Start adding some!</Text>
        ) : (
          goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalNumber}>{index + 1}</Text>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))
        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3949AB",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 1,
  },
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
  listHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3949AB",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C5CAE9",
    paddingBottom: 4,
  },
  scrollView: {
    flex: 1,
  },
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  goalNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5C6BC0",
    marginRight: 12,
    width: 24,
    textAlign: "center",
  },
  goalText: {
    fontSize: 15,
    color: "#333",
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 14,
    marginTop: 30,
    fontStyle: "italic",
  },
});