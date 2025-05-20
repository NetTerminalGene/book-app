import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  title: string;
  authors?: string[];
  thumbnail?: string;
};

export default function BookCard({ title, authors, thumbnail }: Props) {
  return (
    <View style={styles.card}>
      {thumbnail && <Image source={{ uri: thumbnail }} style={styles.image} />}
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text>{authors?.join(', ')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginVertical: 10 },
  image: { width: 60, height: 90, marginRight: 10 },
  text: { flexShrink: 1 },
  title: { fontWeight: 'bold', marginBottom: 4 },
});
