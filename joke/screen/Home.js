import React, { useState } from "react";
import { TouchableOpacity, Text, Alert, StyleSheet, View } from "react-native";

export default function Home() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [showPunch, setShowPunch] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((res) => {
        setSetup(res.setup);
        setPunchline(res.punchline);
        setShowPunch(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <>
      <Text style={styles.title}>Wanna Jokes!!</Text>
      <TouchableOpacity onPress={fetchJoke} style={styles.btn}>
        <Text style={styles.btnInner}>Click me</Text>
      </TouchableOpacity>
      <View style={styles.jokeContainer}>
        <Text style={styles.jokeText}>{setup}</Text>
        {setup && (
          <TouchableOpacity
            onPress={() => {
              setShowPunch(true);
            }}
            style={styles.ansBtn}
          >
            <Text style={{ color: "white" }}>punch</Text>
          </TouchableOpacity>
        )}
      </View>
      {showPunch && <Text style={styles.punchText}>{punchline}😀</Text>}
      {
        loading && <View style={styles.loadingSpinner}></View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 90,
    height: 50,
    backgroundColor: "purple",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnInner: {
    color: "white",
  },
  title: {
    margin: 20,
    fontSize: 30,
    letterSpacing: 1,
  },
  jokeContainer: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  jokeText: {
    fontSize: 20,
  },
  ansBtn: {
    width: 85,
    height: 40,
    backgroundColor: "green",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  punchText: {
    marginTop: 20,
    fontSize: 20,
  },
  loadingSpinner: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: 'rgba(0, 0, 255, 0.3)',
    borderTopColor: 'blue',
    borderRadius: 20,
    animationName: 'spin',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
},
});
