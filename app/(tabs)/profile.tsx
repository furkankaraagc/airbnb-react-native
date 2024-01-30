import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const Page = () => {
  const { isSignedIn, signOut } = useAuth();
  return (
    <View>
      <Button title='Sign Out' onPress={() => signOut()} />
      {!isSignedIn && <Link href={'/(modals)/login'}>Login</Link>}
    </View>
  );
};

export default Page;
