import React, { useState, Component, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RadioButton from './components/RadioButton';
import AsyncStorage from '@react-native-community/async-storage';
const STORAGE_KEY = '@save_mondaynotes';
const STORAGE_KEY2 = '@save_tuesdaynotes';


function Home({navigation}) {
  const [wellnesscheckbutton, setWellnessCheckButton] = useState();
  return (
  <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
            <Image
        style={{ width: 300, height: 300, marginBottom: 15 }}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>
        Hello, Welcome To Enca!
      </Text>
      <View style={styles.spacer}>
      </View>
      <View style={styles.container3}>
      <View style={styles.card}>
      <Text style={styles.coloredtitle}>Take The Wellness Check</Text>
      <Text style={styles.body}>
      The first step to BEGINNING your skincare journey is to take the Wellness Check!
      </Text>
      <TouchableOpacity style={styles.AcceptBtn}>
        <Text style={styles.AcceptTxt}>Take Wellness Check</Text>
      </TouchableOpacity>
      <View style={styles.largespacer}>
      </View>
      <View style={styles.container3}>
      <View style={styles.card}>
      <Text style={styles.coloredtitle}>Take Analyzation Selfie</Text>
      <Text style={styles.body}>
      The second step to BEGINNING your skin care journey is taking your VERY FIRST acne selfie!
      </Text>
      <TouchableOpacity style={styles.AcceptBtn}>
        <Text style={styles.AcceptTxt}>Take Selfie</Text>
      </TouchableOpacity>
      <View style={styles.spacer}>
      </View>
      <View style={styles.container3}>
      <View style={styles.card}>
      <Text style={styles.coloredtitle}>View Recommendations</Text>
      <Text style={styles.body}>
      You can also view some personalized recommendations to track yourself based on your wellness check responses and image analysis!
      </Text>
      <TouchableOpacity style={styles.AcceptBtn}>
        <Text style={styles.AcceptTxt}>View Recommendations</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      </View>
      </View>
      </View>
    </ScrollView>
  );
}

function WellnessQuestion() {
    const [age, setAge] = useState();
  const options = [
    {
      key: 'hairline',
      text: 'Hairline'
    },
    {
      key: 'cheek',
      text: 'Cheek'
    },
    {
      key: 'jawline',
      text: 'Jawline',
    },
    {
      key: 'forehead',
      text: 'Forehead',
    }, 
    {
      key: 'nose',
      text: 'Nose'
    }
  ];

  const options2 = [
    {
      key: 'yes',
      text: 'Yes'
    },
    {
      key: 'sometimes',
      text: 'Sometimes'
    },
    {
      key: 'no',
      text: 'No'
    }
  ];

  const options3 = [
    {
      key: 'yes2',
      text: 'Yes',
    }, 
    {
      key: 'sometimes2',
      text: 'Sometimes'
    },
    {
      key: 'no2',
      text: 'No'
    }
  ];

  const options4 = [
    {
      key: 'yes3',
      text: 'Yes',
    },
    {
      key: 'sometimes3',
      text: 'Sometimes'
    },
    {
      key: 'no3',
      text: 'No'
    }
  ];

  const options5 = [
    {
      key: '1-5 hours',
      text: '1-5 hours',
    },
    {
      key: '6 hours',
      text: '6 hours',
    }, 
    {
      key: '7 hours',
      text: '7 hours',
    },
    {
      key: '8 hours',
      text: '8 hours',
    },
    {
      key: '9 hours',
      text: '9 hours',
    },
    {
      key: '10 hours',
      text: '10 hours'
    },
    {
      key: '11 hours',
      text: '11 hours'
    },
    {
      key: '12+ hours',
      text: '12+ hours'
    }
  ];

  const options6 = [
    {
      key: 'yes4',
      text: 'Yes',
    },
    {
      key: 'sometimes4',
      text: 'Sometimes'
    },
    {
      key: 'no4',
      text: 'No'
    }
  ];

const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedOption2, setSelectedOption2] = React.useState(null);
  const [selectedOption3, setSelectedOption3] = React.useState(null);
  const [selectedOption4, setSelectedOption4] = React.useState(null);
  const [selectedOption5, setSelectedOption5] = React.useState(null);
  const [selectedOption6, setSelectedOption6] = React.useState(null);
  const [hairline, setHairline] = useState(1);
  const [jawline, setJawline] = useState(1);
  const [cheeks, setCheeks] = useState(1);
  const [foreheadnose, setForeheadNose] = useState(1);
  const [assignedImage, setAssignedImage] = useState();
  const [description, setDescription] = useState();
  const [heading, setHeading] = useState();
  const [assignedImage2, setAssignedImage2] = useState();
  const [description2, setDescription2] = useState();
  const [heading2, setHeading2] = useState();
  const [assignedImage3, setAssignedImage3] = useState();
  const [description3, setDescription3] = useState();
  const [heading3, setHeading3] = useState();

  
  global.assignedImage = assignedImage;
  global.assignedImage2 = assignedImage2;
  global.description = description;
  global.description2 = description2;
  global.heading = heading;
  global.heading2 = heading2;
  global.assignedImage3 = assignedImage3;
  global.description3 = description3;
  global.heading3 = heading3;

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key == item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };
  const onSelect2 = (item) => {
    if (selectedOption2 && selectedOption2.key == item.key) {
      setSelectedOption2(null);
    } else {
      setSelectedOption2(item);
    }
  };

  const onSelect3 = (item) => {
    if (selectedOption3 && selectedOption3.key == item.key) {
      setSelectedOption3(null);
    } else {
      setSelectedOption3(item);
    }
  }
  const onSelect4 = (item) => {
    if (selectedOption4 && selectedOption4.key == item.key) {
      setSelectedOption4(null);
    } else {
      setSelectedOption4(item);
    }
  }

  const onSelect5 = (item) => {
    if (selectedOption5 && selectedOption5.key == item.key) {
      setSelectedOption5(null);
    } else {
      setSelectedOption5(item);
    }
  }

    const onSelect6 = (item) => {
    if (selectedOption6 && selectedOption6.key == item.key) {
      setSelectedOption6(null);
    } else {
      setSelectedOption6(item);
    }
  }
    const checkTextInput = () => {
    if (!age.trim()) {
      alert('Please enter your full name');
      return;
    }
    else {
      alert('Success!')
    }
    if (selectedOption2.key == 'yes') {
      setHairline(hairline + 1);
    } 
    if (selectedOption.key == 'hairline') {
      setHairline(hairline+1);
    }
    if (selectedOption.key == 'jawline') {
      setJawline(hairline + 1);
    }
    if (selectedOption3.key == 'yes2') {
      setJawline(jawline + 1);
    }
    if (selectedOption == 'forehead') {
      setForeheadNose(foreheadnose + 1);
    }
    if (selectedOption == 'nose') {
      setForeheadNose(foreheadnose + 1);
    }
    if (selectedOption4.key == 'yes3') {
      setForeheadNose(foreheadnose + 1);
    }
    if (selectedOption == 'cheeks') {
      setCheeks(cheeks+ 1);
    }
    if (selectedOption6.key == 'yes4') {
      setCheeks(cheeks + 1);
    }
    if (selectedOption5.key == '1-5 hours') {
      setForeheadNose(foreheadnose + 1);
    }
    if (selectedOption5.key == '6 hours') {
      setForeheadNose(foreheadnose + 1);
    }
    if (selectedOption5.key == '7 hours') {
      setForeheadNose(foreheadnose + 1);
    }
      if (hairline > jawline && foreheadnose && cheeks) {
      setAssignedImage('http://cdn.shopify.com/s/files/1/0691/6757/products/Eucalyptus_81463c9e-54b5-424e-ac24-aa5cd0348564_600x.jpg?v=1594415367')
      setHeading('Eucalyptus')
      setDescription('To start your skin care journey with assisting herbs, one great one you can use is the eucalyptus plant!')
      setAssignedImage2('https://cdn.notinoimg.com/detail_thumb/topvet/topteaw_kfcr10-01/topvet-tea-tree-oil-gel-for-problematic-skin-acne___15.jpg')
      setHeading2('Tea Tree Oil Gel')
      setDescription2('Another thing you can do is use a fully natural herb called "Tea Tree," and use the gel that comes along with it!')
      setAssignedImage3('https://bulknaturaloils.com/media/catalog/product/cache/5b89197651ea0053483b6b3397eafb60/j/o/jojoba_seeds_and_oil_3.jpg');
      setHeading3('Jojoba Oil')
      setDescription3('The last thing you can use is Jojoba Oil!')
    }
    if (jawline > hairline && foreheadnose && cheeks) {
      setAssignedImage('https://www.gardeningknowhow.com/wp-content/uploads/2014/05/chaste-tree.jpg')
      setHeading('Chaste Tree')
      setDescription('To start your skincare journey with assisting herbs, one great one you can use is the chaste tree plant.')
      setAssignedImage2('https://i2.wp.com/www.pingminghealth.com/wp-content/uploads/2009/12/tra-xanh-dong-chai-1.png?fit=752%2C495&ssl=1')
      setHeading2('Green Tea Herb')
      setDescription2('To start your skincare journey with assisting herbs, another great one you can use is the Green Tea Herb.')
      setAssignedImage3('https://medicine.missouri.edu/sites/default/files/2019-11/healty-food-shutterstock_598759943-800.jpg')
      setHeading3('Healthy Habits To Help')
      setDescription3('Some natural ways you can PREVENT this issue in the future is by eating cleaner in terms of junk food. Try to stay away from foods that contain high levels of dairy or are extremely processed for a week, and track your results by hitting the accept button!')
    }
  if (foreheadnose > jawline && hairline && cheeks) {
    setAssignedImage('https://cdn11.bigcommerce.com/s-4ul1rui7xg/images/stencil/2048x2048/products/616/1999/Echinacea_purpurea_cropped__80031.1564426883.jpg?c=2')
    setHeading('Corn Flower')
    setDescription('To start your skincare journey with assisting herbs, one great one you can use is the corn flower')
    setAssignedImage2('http://static1.squarespace.com/static/5b33a4e93c3a535feb4fed9a/5bbe61b315fcc071ec156542/5bd36383b208fca7c371b642/1611263918219/?format=1500w')
    setHeading2('Indian Madder')
    setDescription2('To start your skincare journey with assisting herbs, another great one you can use is the Indian Madder')
    setAssignedImage3('https://thumbs.dreamstime.com/b/stress-concept-stressful-businessman-working-office-tired-bored-illustration-flat-vector-cartoon-character-stress-concept-184406747.jpg')
    setHeading3('Avoid Stress and Fatigue')
    setDescription3('Based on the information collected by your Q&A responses, stress and fatigue has had a relative impact on your acne vulgaris. To prevent an outbreak like this in the future, you can attempt to take a break from stressful practices as well as anything that requires you to alter your sleep schedule.')
  }
  if (cheeks > foreheadnose && jawline && hairline) {
    setAssignedImage('https://www.gardeningknowhow.com/wp-content/uploads/2020/11/aloe-vera-plant.jpg')
    setHeading('Aloe Vera')
    setDescription('To start your skincare journey with assisting herbs, one great one you can use is Aloe Vera.')
    setAssignedImage2('http://www.jennifercosta.net/uploads/3/9/8/7/39877365/s977369961248485467_p150_i1_w400.jpeg')
    setHeading2('Unsea Barbata')
    setDescription2('To start your skincare journey with assisting herbs, one great one you can use is Unsea Barbata.')
    setAssignedImage3('https://www.bizerba.com/media/themen/hygiene_on_every_level/hygiene-on-every-level_image_w642_h361_retina.png')
    setHeading3('Improve Cleanliness and Hygiene')
    setDescription3('Based on the information collected by your question responses, spread bacteria could have had a relative impact on your acne vulgaris. To prevent an outbreak like this in the future, you can try to wear fresh masks, change your pillows regularly, and clean your phone regularly.')
  }
  }
  global.age = age;
    return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.spacer}>
    </View>
        <View style={styles.spacer}>
    </View>
        <View style={styles.spacer}>
    </View>
    <View style={styles.container}>
    <Text style={styles.header}>1. What is your full name?</Text>
    <TextInput 
      style={styles.input}
      value={age}
      placeholder='Enter Value Here'
      onChangeText={text => setAge(text)}
    />
    <Text style={styles.header}>2. Where do you most commonly find acne on your face?</Text>
    <RadioButton
      selectedOption={selectedOption}
      onSelect={onSelect}
      options={options}
    />
    <Text style={styles.header}>3. Do you use hair products on a daily basis?</Text>
    <RadioButton
      selectedOption={selectedOption2}
      onSelect={onSelect2}
      options={options2}
    />
    <Text style={styles.header}>4. Does your diet typically consist of dairy or heavily processed foods?</Text>
    <RadioButton
      selectedOption={selectedOption3}
      onSelect={onSelect3}
      options={options3}
    />
    <Text style={styles.header}>5. Does your daily lifestyle typically involve high emotional stress?</Text>
    <RadioButton
      selectedOption={selectedOption4}
      onSelect={onSelect4}
      options={options4}
    />
    <Text style={styles.header}>6. Which of the following most accurately depicts your sleep schedule?</Text>
    <RadioButton
      selectedOption={selectedOption5}
      onSelect={onSelect5}
      options={options5}
    />
    <Text style={styles.header}>7. Do things you use on a daily basis for your face (towel, pillow, mask) often get cleaned?</Text>
    <RadioButton
      selectedOption={selectedOption6}
      onSelect={onSelect6}
      options={options6}
    />
    <TouchableOpacity style={styles.ButtonContainer} onPress={checkTextInput}>
      <Text style={styles.ButtonText}>Submit</Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
  );
}


function TakeImage() {
  return (
    <View style={styles.container}>
    <Text>Click For Camera</Text>
    </View>
  );
}

function Profile()  {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Anagha Dogiparthi</Text>
    <Image 
      style={styles.tinyLogo}
      source={{
        uri:'https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png',
        }}
    />
    <Text style={styles.title}>Recent Skin Score: 39</Text>
    </View>
  );
}



function Recommendations({navigation}) {
    function acceptfunction() {
    alert('Path Selected')
  }
  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container3}>
      <View style={styles.card}>
        <Image style={styles.thumb} source={{uri: global.assignedImage}}/>
        <Text style={styles.h1}>{global.heading}</Text>
        <Text style={styles.body}>
        {global.description}
        </Text>
        <TouchableOpacity style={styles.AcceptBtn} onPress={acceptfunction}>
          <Text style={styles.AcceptTxt}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View styles={styles.spacer}>
    </View>
        <View style={styles.container3}>
      <View style={styles.card}>
        <Image style={styles.thumb} source={{uri: global.assignedImage2 }}/>
        <Text style={styles.h1}>{global.heading2}</Text>
        <Text style={styles.body}>
        {global.description2}
        </Text>
        <TouchableOpacity style={styles.AcceptBtn} onPress={acceptfunction}>
          <Text style={styles.AcceptTxt}>Accept</Text>
        </TouchableOpacity>
        <View styles={styles.spacer}>
    </View>
    </View>
    </View>
      <View style={styles.container3}>
        <View style={styles.card}>
        <Image style={styles.thumb} source={{uri: global.assignedImage3 }}/>
        <Text style={styles.h1}>{global.heading3}</Text>
        <Text style={styles.body}>
        {global.description3}
        </Text>
        <TouchableOpacity style={styles.AcceptBtn} onPress={acceptfunction}>
          <Text style={styles.AcceptTxt}>Accept</Text>
        </TouchableOpacity>
        </View>
        </View>
  </ScrollView>
  );
}

function SkinLog() {
    const [mondaynotes, setMondayNotes] = useState('');
  const [tuesdaynotes, setTuesdayNotes] = useState();
  const [wednesdaynotes, setWednesdayNotes] = useState();
  const [thursdaynotes, setThursdayNotes] = useState();
  const [fridaynotes, setFridayNotes] = useState();
  const [saturdaynotes, setSaturdayNotes] = useState();
  const [sundaynotes, setSundayNotes] = useState();

    useEffect(() => {
    readData()
  }, [])
      useEffect(() => {
    readData2()
  }, [])

  const readData = async () => {
    try {
      const mondaynotes = await AsyncStorage.getItem(STORAGE_KEY)

      if (mondaynotes !== null) {
        setMondayNotes(mondaynotes)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

    const readData2 = async () => {
    try {
      const tuesdaynotes = await AsyncStorage.getItem(STORAGE_KEY2)

      if (tuesdaynotes !== null) {
        setTuesdayNotes(tuesdaynotes)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

 
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, mondaynotes)
      setMondayNotes(mondaynotes)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

    const saveData2 = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY2, tuesdaynotes)
      setTuesdayNotes(tuesdaynotes)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }


  const onSubmitEditing = () => {
    if (!mondaynotes) return
    saveData(mondaynotes)
    setMondayNotes('')
  }
    const onSubmitEditing2 = () => {
    if (!tuesdaynotes) return
    saveData(tuesdaynotes)
    setTuesdayNotes('')
  }

  const onChangeText = mondaynotes => setMondayNotes(mondaynotes)
  const onChangeText2 = tuesdaynotes => setTuesdayNotes(tuesdaynotes)

  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container3}>
    <View style={styles.card}>
      <Image style={styles.thumb} source={{uri:'https://resourcesus.moneypenny.com/wp-content/uploads/2020/01/How_to_Beat_Blue_Monday-1024x683.jpg' }}/>
      <Text style={styles.h1}>Monday</Text>
      <Text style={styles.coloredtitle}>
      Enter Observations and Notes:
      </Text>
      <TextInput 
      style={styles.input}
      value={mondaynotes}
      placeholder='Enter Value Here'
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
    </View>
    </View> 
    <View styles={styles.spacer}>
    </View>
        <View style={styles.container3}>
    <View style={styles.card}>
      <Image style={styles.thumb} source={{uri:'https://i2.wp.com/www.goodigcaptions.com/wp-content/uploads/2020/03/Tuesday-Instagram-Captions-2.jpg?fit=1049%2C651&ssl=1' }}/>
      <Text style={styles.h1}>Tuesday</Text>
      <Text style={styles.coloredtitle}>
      Enter Observations and Notes:
      </Text>
      <TextInput 
      style={styles.input}
      value={tuesdaynotes}
      placeholder='Enter Value Here'
      onChangeText={onChangeText2}
      onSubmitEditing={onSubmitEditing2}
    />
    </View>
    </View>

    </ScrollView>
  );
}



function RecommendationPage ({navigation}) { 
  function acceptfunction() {
    alert('Path Selected')
  }
  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container3}>
      <View style={styles.card}>
        <Image style={styles.thumb} source={{uri: global.assignedImage}}/>
        <Text style={styles.h1}>{global.heading}</Text>
        <Text style={styles.body}>
        {global.description}
        </Text>
        <TouchableOpacity style={styles.AcceptBtn} onPress={acceptfunction}>
          <Text style={styles.AcceptTxt}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View styles={styles.spacer}>
    </View>
        <View style={styles.container3}>
      <View style={styles.card}>
        <Image style={styles.thumb} source={{uri: global.assignedImage2 }}/>
        <Text style={styles.h1}>{global.heading2}</Text>
        <Text style={styles.body}>
        {global.description2}
        </Text>
        <TouchableOpacity style={styles.AcceptBtn} onPress={acceptfunction}>
          <Text style={styles.AcceptTxt}>Accept</Text>
        </TouchableOpacity>
        <View styles={styles.spacer}>
    </View>
    </View>
    </View>
      <View style={styles.container3}>
        <View style={styles.card}>
        <Image style={styles.thumb} source={{uri: global.assignedImage3 }}/>
        <Text style={styles.h1}>{global.heading3}</Text>
        <Text style={styles.body}>
        {global.description3}
        </Text>
        <TouchableOpacity style={styles.AcceptBtn} onPress={acceptfunction}>
          <Text style={styles.AcceptTxt}>Accept</Text>
        </TouchableOpacity>
        </View>
        </View>
  </ScrollView>
  )
}


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#000080"
      inactiveColor = '000080'
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#F2D6F6',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Recommendations"
        component={Recommendations}
        options={{
          tabBarLabel: 'Reccos',
          tabBarColor: '#F2D6F6',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen 
        name='Take Image'
        component={TakeImage}
        options={{
          tabBarLabel: 'Take Image',
          tabBarColor: '#F2D6F6',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='camera' color={color} size={20} />
          ),
        }}
      />
            <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#F2D6F6',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
      name='Well Check'
      component={WellnessQuestion}
      options={{
        tabBarLabel: 'Well Check',
        tabBarColor: '#F2D6F6',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='check' color={color} size={20} />
        ),
      }}
      />
      <Tab.Screen
      name='Skin Log'
      component={SkinLog}
      options={{
        tabBarLabel: 'Skin Log',
        tabBarColor: '#F2D6F6',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='notebook' color={color} size={20} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2D6F6',
  },
  container2: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 300,
    height: 50
  },
  container3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    backgroundColor: '#00BFFF',
    height: 200
  },
  card: {
    width: '100%',
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container6: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: '30',
    color: '#000',
    margin: 15,
    textAlign: 'center'
  },
  body: {
    color: '#000',
    paddingHorizontal: 10,
    textAlign: 'center',
    padding: 10
  },
  thumb: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  AcceptBtn: {
    margin: 10,
    backgroundColor: '#000080',
    padding: 10,
    width: '90%',
    borderRadius: 20,
    alignText: 'center',
    alignItems: 'center'
  },
  AcceptTxt: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    alignText: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  coloredtitle: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#000080'
  },
  ButtonContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  ButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'center',
    alignText: 'center'
  },
  spacer: {
    paddingVertical: 5
  },
  largespacer: {
    paddingVertical: 10,
    backgroundColor: '#F2D6F6'
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#364f6b',
    marginBottom: 18,
    textAlign: 'center'
  },
  input: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 13,
    textAlign: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: '#000080',
    fontWeight: 600
  },
  body2: {
    marginTop: 40
  },
    bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description5:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  ScrollView: {
    backgroundColor: '#F2D6F6',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    width: '100%'
  },
  tinyLogo: {
    width: 150,
    height: 150
  }
});

