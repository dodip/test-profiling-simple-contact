/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';
//import ContactDetailForm from './form/ContactDetailForm';
import { connect } from 'react-redux';
import { addContact, getContact } from '../action';

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactId: this.props.navigation.state.params.contactId,
      contact: {},
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    };
  }

  static navigationOptions = (props) => ({
    title: 'Contact Detail',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: '#FFFF',
  });

  componentDidMount() {
    if(this.props.navigation.state.params.contactId){
      this.props.getContact(this.props.navigation.state.params.contactId);
    }
  }

  deleteContact(){
  }

  updateContact(){

  }

  addContact(){
    this.props.addContact({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      photo: this.state.photo,
    });
  }

  renderAddForm(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>First Name</Text>
              <TextInput
                onChangeText={(text) => this.setState({ firstName: text })}
                value={this.state.firstName}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>Last Name</Text>
              <TextInput
                onChangeText={(text) => this.setState({ lastName: text })}
                value={this.state.lastName}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>Age</Text>
              <TextInput
                onChangeText={(text) => this.setState({ age: text })}
                value={this.state.age}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>URL Photo</Text>
              <TextInput
                onChangeText={(text) => this.setState({ photo: text })}
                value={this.state.photo}
                style={styles.inputStyle}
              />
            </View>
          </ScrollView>
          <View>
            <Button title="Save" color='blue' 
              onPress={() => this.addContact() }
            />
          </View>
      </View>
    );
  }

  renderUpdateForm(){
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>First Name</Text>
              <TextInput
                onChangeText={(text) => this.setState({ firstName: text })}
                value={ this.props.contact && this.props.contact.firstName ? this.props.contact.firstName : this.state.firstName}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>Last Name</Text>
              <TextInput
                onChangeText={(text) => this.setState({ lastName: text })}
                value={ this.props.contact && this.props.contact.lastName ? this.props.contact.lastName : this.state.lastName}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>Age</Text>
              <TextInput
                onChangeText={(text) => this.setState({ age: text })}
                value={ this.props.contact && this.props.contact.age ? this.props.contact.age+'' : this.state.age}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formGroupTitle}>Photo</Text>
              <Image
                source={{ uri: this.props.contact && this.props.contact.photo ? this.props.contact.photo : null  }}
                style={styles.image}
              />
            </View>
          </ScrollView>
          <View style={{ padding: '5%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <View style={{width: '40%', margin: '1%'}}>
                <Button title="Edit" color='#19A15F' 
                  onPress={() => this.updateContact() }
                />
            </View>
            <View style={{width: '40%', margin: '1%'}}>
              <Button title="Delete" color='#D96D3A'
                onPress={() => this.deleteContact() }
              />
            </View>
          </View>
      </View>
    );
  }



  render() {
    const { loading } = this.props;
   /*  if(!loading) { */
      return (
        <View style={styles.container}>
          {this.state.contactId != null ? this.renderUpdateForm()
           : this.renderAddForm() }
        </View>
      );
   /*  } else {
      <View style={styles.container}>
        <ActivityIndicator style={styles.centerScreen}/>
      </View>
    } */
    
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  loading: state.loading,
  errorMessage: state.errorMessage,
  successMessage: state.successMessage,
  contact: state.contact,
})

const mapDispatchToProps = {
  addContact, getContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '1%',
  },
  header : {
    backgroundColor: '#1E1E1E',
  },
  headerTitle: {
    flex: 1,
    color: '#FFFF',
  },
  scrollView: {
    marginBottom: 10,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    borderBottomWidth: 1,
  },
  formGroup: {
    marginTop: 16,
  },
  image:{
    width: 100,
    height: 100,
    backgroundColor: 'grey',
  }
});
