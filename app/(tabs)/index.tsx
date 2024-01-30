import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import items from '@/assets/data/airbnb-listings.json';

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings items={items} category={category} />
    </View>
  );
};

export default Page;
