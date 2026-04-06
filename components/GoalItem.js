import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, index, onDeleteGoal }) {
  return (
    // Pressable on each goal item — long press to delete
    <Pressable
      onLongPress={onDeleteGoal}
      android_ripple={{ color: "#c5cae9" }}
      style={({ pressed }) => [
        styles.goalItem,
        pressed && styles.goalItemPressed,
      ]}
    >
      <Text style={styles.goalNumber}>{index + 1}</Text>
      <Text style={styles.goalText}>{text}</Text>
      <Text style={styles.deleteHint}>hold to delete</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
  goalItemPressed: {
    backgroundColor: "#e8eaf6",
    opacity: 0.75,
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
  deleteHint: {
    fontSize: 10,
    color: "#aaa",
    fontStyle: "italic",
  },
});