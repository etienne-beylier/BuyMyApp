/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Tchoupie</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
/*import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);*/
/*
import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);
*//*
import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);
*/
/*
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ffffff' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class TabViewPagerScroll extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Ma Liste' },
      { key: 'second', title: 'Mon Panier' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/
import React from 'react';
import { Text, View, StatusBar, Button, Alert, TextInput } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppRegistry, FlatList, StyleSheet} from 'react-native';
import ListItem from './Components/ListItem';
import SwipeableList from './Components/SwipeableList';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', data: [{"key": "bob"}, {"key": "tod"}]};
  }

  forceUpdateHandler() {
    this.forceUpdate();
  };

  onPress(text) {
//      Alert.alert('You tapped the button!')
  console.log(text);
  this.state.data.push({"key": text});
  console.log(this.state.data);
    }

  render() {
    return (
  /*    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#ffffff", }}>
        <Text>Home!</Text>
      </View>*/
      <View style={styles.notContainer}>
        <TextInput
          style={{height: 40, backgroundColor: 'white'}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
        onPress= {() => this.onPress(this.state.text)}
        title="Add Item"
        color="blue"
        accessibilityLabel="Learn more about this purple button" />
      <View style={styles.container}>
      <Button
      onPress= {() => {this.forceUpdateHandler}}
      title="Reload"
      color="blue"
      accessibilityLabel="Reload the view" />
        <SwipeableList
        /*data={[
          {key: 'test'},
          {key: 'ta mère'},
          {key: 'ça ne va'},
          {key: 'pas marcher'},
          {key: 'ertyh'},
          {key: 'wxfvsdfv'},
          {key: 'zergvzervrea'},
          {key: 'pzffzras zrgzr'},
          {key: 'teztzretzrtzertzertst'},
          {key: 'ta mzrzrrtzrtzertère'},
          {key: 'ça sdfgsdfgsdfgdsfgdsfgne va'},
          {key: 'pas marztgfdssdfcher'},
        ]}*/
        data = {this.state.data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  notContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <SwipeableList
            data={[
            {key: 'no idea'},
            {key: 'on how to make it works'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
    );
  }
}

export default createBottomTabNavigator({
  "Ma Liste": HomeScreen,
  "Mon Panier": SettingsScreen,
});/*
export default createBottomTabNavigator(
  {
    "Ma Liste": HomeScreen,
    "Mon Panier": SettingsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Ma Liste") {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if ("Mon Panier" === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }


        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);*/
