import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>ExploreHeader</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {},
});
