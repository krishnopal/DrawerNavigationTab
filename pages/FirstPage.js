
import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';

const FirstPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1,}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16, }}>
            This is the First Page
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
