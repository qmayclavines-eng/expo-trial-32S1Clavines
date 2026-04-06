import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";

function GoalList({ goals, onDeleteGoal }) {
  return (
    <>
      <Text style={styles.listHeader}>List of Goals</Text>
      <View style={styles.goalListContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              index={itemData.index}
              onDeleteGoal={onDeleteGoal.bind(this, itemData.item.key)}
            />
          )}
        />
      </View>
    </>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  listHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3949AB",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C5CAE9",
    paddingBottom: 4,
  },
  goalListContainer: {
    flex: 1,
  },
});