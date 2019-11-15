import React, { PureComponent } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { reduxForm, Field, getFormValues } from 'redux-form';
import GenericTextInput from '../../component/GenericTexInput';
import { required, onlyNumber, eligibleAges } from '../../util/FormValidation';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

class ContactDetailForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.formGroup}>
            <Text style={styles.formGroupTitle}>First Name</Text>
            {/* <Field
              name={'firstName'}
              inputStyle={[styles.inputStyle]}
              component={TextInput}
            /> */}
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
      </View>
    );
  }
}

const formName = 'ContactDetailForm';

const mapStateToProps = (state) => ({
  formValues: getFormValues(formName)(state),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: formName,
  })(ContactDetailForm)
);

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 1,
  },
  scrollView: {
    marginBottom: 10,
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
});