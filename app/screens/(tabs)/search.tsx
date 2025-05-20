import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import BookCard from '../../components/book-card';
import { searchBooks } from '../../services/google-books';
import { GoogleBook } from '../../types/book';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GoogleBook[]>([]);

  const handleSearch = async () => {
  if (!query.trim()) {
    alert('Please enter a search term');
    return;
  }

  try {
    const encodedQuery = encodeURIComponent(query.trim());
    const books = await searchBooks(encodedQuery);
    setResults(books);
  } catch (error) {
    console.error('Search error:', error);
    alert('Something went wrong. Try again later.');
  }
};


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search books..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            thumbnail={item.volumeInfo.imageLinks?.thumbnail}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
