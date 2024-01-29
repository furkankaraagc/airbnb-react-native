import { View, Text, Button } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

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
