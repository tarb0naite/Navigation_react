import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import data from './duomenys.json';
import React, {useState, useEffect} from 'react';
import SortingWidget from './SortigWidget';
import SortingWidgetStreet from './SortigWidgetStreet'; 
import { Button, Pressable,  StyleSheet,  Text, View, ImageBackground,  ScrollView } from 'react-native';

const image = {uri: 'https://lh3.googleusercontent.com/pw/ADCreHcxqkombRd7B2Ir9ou2qznKVubSRrAk-mFs2axziyQEsvHGXeEnq7kARtYyONEwsAU4iv7rLxqmTAxzbj8bfk5ILbl-CEZARcm-ZTP2wFxgPZaTig3mpiEfkdSlsrS__OQWf25M-RDYMqXfuPaeTaS6icqpFcbSZOLIgXUfjfxsnau5JO0ybUnoO81k2BUylQbV4VmzO7SWsW2z4-dQmmA6wqB0fR0v4aR52egSrmMJVQ6TE2LoNFVR2bJG_kgT6VeEfNvw1GA_3o1zDjsCibVyd8ZvgKWmzfQdPJf4RjcCn3i5KAOj-1oG4Z9OzdVTszM6FVkLRCMHJ3oDN1LWycb5AfXqWgCxUDYmVtYhHAo_su_Wm0J5_ByzRdbqROpC43-6ash_0oSd-oZP28ruXsixC5NFgRMpxYv9zrEUclnOp6yVi0CIMuGesNr6e-SkufYQP8qvG00xDSL2_0RZpJlJtzDZwQILGCN_-Lm30-XF7j-ygUKaqTPX29d8EkUfpb0j7-P6NAMHTUe8x91umyUbQsJgYsV7keMex9AuBiV1vJrRfix3eQb2Vd3kBiDdeLSgv9ki9qKrYjzFxTB4eWBwzOEoJWiS625HYdCjaI0FtBZQR78NCja9iEAXcQ0p-ii8nrS6_sAvMmxgYH_GlU5AoAGHUmCMXXtPcoxdrs8_gBLXgP09EYNUGn8gpim28JJ1aqcfYFcR1NjruDfurA-20_tHl6USPIwV4mnlkrrwIJBWI4PbqBg61YMe1C50BdKY4DKB-WVDWvIX7wmYY8rVRhcV19VJ2yeR9L0Wg1DY4kkhGnRK7JrMLeGpsm_KrO0KQDmQi4_vgnBsBxDq2Mr6AhzhgPM_WLei8zSkdPL7J5jDtYs7Cr_deLEYzr0NnfTBKAON8SqeY-Q9-GdY1iHsWA=w1465-h934-s-no?authuser=0'};
const image2 = {uri: 'https://lh3.googleusercontent.com/pw/ADCreHeORH2Zo5V849pU-g5BqCp9cKxFcvrh53KjVGgA_RxlFT2whotyAUtC0LFwz9RO2Ip07gi-Kr2RHZcBWn01o6XcW0yctGfCREOVlWgFhiMfH15qGVGk6J7w68jTVsnPsvUrx7BVP3IvW8mSn6EFzKD93TeRhwEh46hjHzaCj3SsNgzTFfiUzrRlF9aYVtDZKH5wL1ebAH8mpnqxuo3mMwNoX0hd5dzCmVSZHmGNaCXxMpRidA4JjF6y2xovLFS5cNVoX3T6b_YUUc3oZWlm8ICWfMsVsFt6oYD-rB8knebwiHgkOtqJpvhBkeFu00Sy-fil9WyNwNNPm9yk9w-xCudh-eNj04BJY6IhdYZnXrM45z-xURyPxoLNQP0jqmtVvMlDBlDJ3NyIMH2bA_ocQkE514Vnsm3kONDKOaycQ0Ggq5Mh14aHnJJZckcPeFPs37azEBJuSOQ1kcdq-i6tIN-U_TMSKvkmuRUAUQ65PlhhVgpEU8ME5uyowIgpdVjaEuaPgUnjSbUl-isCxDWc7_A_RAuWIyrZzAhidboCDgfLxeXS2yuGIFFxgSF9479QSbnJ7LkELA-kBJPqGRmYrCUvXbjywuvf7EZa0h-PzXEfdy-f8bLSRrSvkCDNosgMHXJ43NGIQG1MTk1rpOqP23sM5F8KKczYH3iJ9J7CLQFPXrwZ1SMBGhFidvB7MR0XfeOxxkvLXi-A4OjyWpzQaMLmQb1yWKXyKc4VU1jt4qi84WIrEAe2ksBDdsXXuUMust_7MCHAWSvh5YLOywFBLsgRkTGQFjsJ6phgmnkiq09wUBOJzj1qy6xZqFPLowTEszCeqrzY1PBATiqxUAsjVvbru0Pkq8SdZjeXSZclUUr6_TzQ7HufbX0PRO6Zk4vYeEC_gKns5Nrd-xOJYbcR__UrHQ=w1660-h934-s-no?authuser=0'};
const image3 = {uri: 'https://w0.peakpx.com/wallpaper/186/252/HD-wallpaper-drift-speed-turbo.jpg'};
const image4 = {uri: 'https://i.pinimg.com/564x/c3/2c/e0/c32ce0fd58fa3ca320325c962ac3d044.jpg'}

const HomeScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
    
      <View style={styles.imageContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          
          <Pressable
            style={styles.buttonStreet}
            onPress={() => {
              title="Street"
              navigation.navigate('Street');
            }}
          >
            <Text style={styles.text2}>Street</Text>
          </Pressable>
        </ImageBackground>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
          <Pressable
            style={styles.buttonPro}
            onPress={() => {
              title="Semi Pro"
              navigation.navigate('SemiPro');
            }}
          >
            <Text style={styles.text2}>Semi PRO</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
};

const SemiProScreen = ({ navigation }) => {
  const semiProLeague = data.find((item) => item.league_title === "SEMI PRO");
  const unsortedDrivers = semiProLeague.drivers;
  const [sortedDrivers, setSortedDrivers] = useState([...unsortedDrivers]);

  const handleSort = (option) => {
    let sortedData = [...unsortedDrivers];

    if (option === 'firstname-asc') {
      sortedData.sort((a, b) => a.firstname.localeCompare(b.firstname));
    } else if (option === 'firstname-desc') {
      sortedData.sort((a, b) => b.firstname.localeCompare(a.firstname));
    } else if (option === 'qualification') {
      sortedData.sort((a, b) => calculateQualificationPoints(b) - calculateQualificationPoints(a));
    } else if (option === 'tandem') {
      sortedData.sort((a, b) => calculateTandemPoints(b) - calculateTandemPoints(a));
    }

    setSortedDrivers(sortedData);
  };
  return (
    <ImageBackground source={image3} resizeMode="cover" style={styles.image}>
         <View>
       <SortingWidget onSort={handleSort} />
      {sortedDrivers.map((driver) => (
        <Pressable
           key={driver.driver_id}
           style={styles.button}
           onPress={() =>
    navigation.navigate('ThirdPage', {
      driver: driver,
      backgroundImage: driver.image, 
    })
  }
>
  <Text style={styles.text}>
  Dalyvis - {driver.firstname} {driver.lastname} {'\n'}
  Automobilis - {driver.car} {'\n'}
  Kvalifikacijos taškai: {calculateQualificationPoints(driver)} {'\n'}
  Porinio važevimo taškai: {calculateTandemPoints(driver)}
</Text>
</Pressable>

      ))}
    </View>
    </ImageBackground>
 
  );
};

const StreetScreen = ({ navigation }) => {
  const streetLeague = data.find((item) => item.league_title === "STREET");
  const unsortedDrivers = streetLeague.drivers;
  const [sortedDrivers, setSortedDrivers] = useState([...unsortedDrivers]);

  const handleSort = (option) => {
    let sortedData = [...unsortedDrivers];

    if (option === 'firstname-asc') {
      sortedData.sort((a, b) => a.firstname.localeCompare(b.firstname));
    } else if (option === 'firstname-desc') {
      sortedData.sort((a, b) => b.firstname.localeCompare(a.firstname));
    } else if (option === 'qualification') {
      sortedData.sort((a, b) => calculateQualificationPoints(b) - calculateQualificationPoints(a));
    } else if (option === 'tandem') {
      sortedData.sort((a, b) => calculateTandemPoints(b) - calculateTandemPoints(a));
    }

    setSortedDrivers(sortedData);
  };
  return (
    <ImageBackground source={image4} resizeMode="cover" style={styles.image}>
    <ScrollView>
 <View>
       <SortingWidgetStreet onSort={handleSort} />
       {sortedDrivers.map((driver, index) => (
  <Pressable
    key={driver.driver_id || index} 
    style={styles.button}
    onPress={() =>
      navigation.navigate('ThirdPage', {
        driver: driver,
        backgroundImage: driver.image,
      })
    }
  >
    <Text style={styles.text}>
  Dalyvis - {driver.firstname} {driver.lastname} {'\n'}
  Automobilis - {driver.car} {'\n'}
  Kvalifikacijos taškai: {calculateQualificationPoints(driver)} {'\n'}
  Porinio važevimo taškai: {calculateTandemPoints(driver)}
</Text>
  </Pressable>
))}

    </View>
    </ScrollView>
   </ImageBackground>
  );
};

function calculateTandemPoints(driver) {
  let totalTandemPoints = 0;
  driver.race.forEach((race) => {
    totalTandemPoints += race.tandem_points;
  });
  return totalTandemPoints;
}

function calculateQualificationPoints(driver) {
  let totalQualificationPoints = 0;
  driver.race.forEach((race) => {
    totalQualificationPoints += race.qualification_points;
  });
  return totalQualificationPoints;
}

const ThirdScreen = ({ route, navigation }) => {
  const driver = route.params.driver;
  const backgroundImage = route.params.backgroundImage;

  const Card = ({ title, content }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardContent}>{content}</Text>
      </View>
    );
  };
  
  return (
    <ImageBackground source={{ uri: backgroundImage }} resizeMode="cover" style={styles.image}>

    <ScrollView>
      <Card title="Vardas" content={driver.firstname} />
      <Card title="Pavardė" content={driver.lastname} />
      <Card title="Mašina" content={driver.car} />

      {driver.race.map((race) => (
        <View key={race.race_id} style={styles.cardContainer}>
        
          <Card title={`Varžybų vieta: ${race.race_id}`} content={race.race_information} />
          <Card title="Kvalifikacijos pozicija" content={race.qualification_position} />
          <Card title="Kvalifikacijos rezultatai" content={race.qualification_result} />
          <Card title="Kvalifikacijos taškai" content={race.qualification_points} />
          <Card title="Porinio važevimo rezultatai" content={race.tandem_result} />
          <Card title="Porinio važevimo taškai" content={race.tandem_points} />
        </View>
      ))}
     
    </ScrollView>
    </ImageBackground>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#737278', 
          },
          headerTintColor: 'white', 
        }}
      />
      <Stack.Screen
        name="Street"
        component={StreetScreen}
        options={{
          title: 'Street',
          headerStyle: {
            backgroundColor: '#737278',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdScreen}
        options={{
          title: 'Third Page',
          headerStyle: {
            backgroundColor: '#737278',

             },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="SemiPro"
        component={SemiProScreen}
        options={{
          title: 'Semi Pro',
          headerStyle: {
            backgroundColor: '#737278',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    marginLeft: 0,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  pageTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
   card: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: 300,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.8, 
  },
  dropdown: {
    height: 55,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 8,
    left:200,
    top:10,
    },
  placeholderStyle: {
    backgroundColor: 'black',
    fontSize: 16,
  },
  selectedTextStyle: {
    color:'#190C41',
    fontSize: 10,
    marginLeft: 8 ,
  },
   
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 15,
    backgroundColor: '#63616B',
    opacity: 0.95,
    width:300,
    left:20,
    right:75,
    top:25,
    margin:10,
  },
  buttonStreet: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 15,
    backgroundColor: '#DDD7F0',
    width:200,
    height:80,
    left:75,
    right:75,
    bottom:0,
    margin:10,
    
  },
  buttonPro: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 15,
    backgroundColor: '#DDD7F0',
    width:200,
    height:80,
    left:75,
    right:75,
    top:0,
    margin:10,
    
  },
  text2: {
    fontSize: 24,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height:'100%',
   
  },
  card: {
    backgroundColor: '#2A2D2E',
    opacity: 0.95,
    padding: 10,
    margin: 6,
    left: 5,
    borderRadius: 12,
    width: 300,
    shadowColor: '#392146',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8, 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  cardContent: {
    fontSize: 16,
    color: '#E8D6F2',
  },
});
