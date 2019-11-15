/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,
         Image, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getContactList } from '../action';

class ContactHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  static navigationOptions = (props) => ({
    title: 'Contacts',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  });

  componentDidMount() {
    this.props.getContactList();
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('ContactDetailScreen', { contactId: item.id })}
    >
      <View style={styles.contact}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: item.photo }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.firstName + ' ' + item.lastName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { contacts, loading } = this.props;
    if(!loading) {
        return (
          <View style={styles.container}>
            {contacts.length >= 1 ? (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={contacts}
              renderItem={this.renderItem}
            />) : (
            <View style={styles.centerScreen}>
              <Text style={styles.noContactText}>You have no contact.</Text>
            </View>)}
            <Button title="Add Contact" 
              onPress={() => this.props.navigation.navigate('ContactDetailScreen', { contactId: null })}/>
          </View>
        );
    } else {
        return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.centerScreen}/>
        </View>
        );
    }
  }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    loading: state.loading,
    errorMessage: state.errorMessage,
  })

const mapDispatchToProps = {
    getContactList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactHome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37373D',
    padding: '1%',
  },
  header : {
    backgroundColor: '#1E1E1E',
  },
  headerTitle: {
    flex: 1,
    color: '#FFFF',
  },
  contact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '1%',
    borderBottomColor: '#787878',
    borderBottomWidth: 1,
  },
  avatarContainer: {
    width: '10%',
    borderRightColor: '#787878',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#B5B5B5',
  },
  nameContainer: {
    width: '80%',
    padding: '3%',
  },
  nameText: {
    color: '#FFFF',
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerScreen: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  noContactText: {
    color: '#FFFF',
  }
});