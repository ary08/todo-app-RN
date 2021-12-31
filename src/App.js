import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState();

  const addNote = () => {
    if (note.length !== 0) {
      var notesCpy = notes;
      notesCpy.push(note);
      setNotes(notesCpy);
      setNote("");
    }
    // window.alert("oho shit ! u r missing something.")
    console.log(note);
  };

  return (
    <View>
      <Text style={styles.heading}>Take your Notes</Text>
      <View style={styles.form}>
        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Enter your Task"
          style={styles.field}
        />
        <TouchableOpacity onPress={addNote}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
      {notes.length === 0 ? (
        <Text
          style={{
            fontSize: 28,
            marginTop: 20,
            paddingLeft: 25,
            textAlign: "cener",
            color: "red"
          }}
        >
          No Task Added...
        </Text>
      ) : (
        <View>
          {notes.map((note, index) => (
            <Text
              key={index}
              style={{
                margin: 16,
                borderRadius: 40,
                padding: 10,
                fontSize: 22,
                elevation: 4,
                backgroundColor: "white",
                color: "green"
              }}
            >
              {note}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    marginVertical: 40,
    width: deviceWidth,
    textAlign: "center",
    color: "blue",
    textShadowColor: "blue",
    textShadowRadius: 2
  },

  field: {
    borderColor: "black",
    borderWidth: 1,
    width: 3 * (deviceWidth / 4),
    borderRadius: 40,
    paddingLeft: 20
  },

  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  btn: {
    fontSize: 28,
    height: 50,
    width: 50,
    textAlign: "center",
    backgroundColor: "grey",
    borderRadius: 50,
    paddingTop: 4
  }
});

export default App;
