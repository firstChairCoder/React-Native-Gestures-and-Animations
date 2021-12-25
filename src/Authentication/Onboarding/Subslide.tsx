import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  subtitle: {
    marginBottom: 12,
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    color: "#0C0D34",
    textAlign: "center",
  },
  description: {
    marginBottom: 12,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
