import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  activateWakelock,
  deactivateWakelock,
} from 'react-native-wakelock-keepawake';

export default function App() {
  const keepScreenAwake = () => {
    activateWakelock();
  };

  const allowScreenSleep = () => {
    deactivateWakelock();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>React Native Keepawake Example</Text>

        <TouchableOpacity
          style={[styles.button, styles.activateButton]}
          onPress={keepScreenAwake}
        >
          <Text style={styles.buttonText}>Keep Screen Awake</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deactivateButton]}
          onPress={allowScreenSleep}
        >
          <Text style={styles.buttonText}>Allow Screen Sleep</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  activateButton: {
    backgroundColor: '#4CAF50',
  },
  deactivateButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
