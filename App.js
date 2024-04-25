import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useState } from 'react';


function InstaGithub({ githubUser }) {
  const [liked, SetLiked] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10 }}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20
          }}
          source={{ uri: `https://github.com/${githubUser}.png` }} />
          <Text>
            {githubUser}
          </Text>
      </View>
      <Image
        style={{
          width: '100%',
          height: 350,
        }}
        source={{ uri: `https://github.com/${githubUser}.png` }} />
      <View style={{ flexDirection: 'row', padding: 15, alignItems:'center'}}>
        <TouchableOpacity onPress={() => SetLiked(!liked)}>
          {liked && <Octicons name="heart-fill" size={24} color="black" />}
          {!liked && <Octicons name="heart" size={24} color="black" />}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView >
        {['omariosouto',
          'vweberfroes',
          'helyssonbn3040',
          'gabrielfroes',
          'peas'
        ].map((githubUser) =>
          <InstaGithub key={githubUser} githubUser={githubUser} />

        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
