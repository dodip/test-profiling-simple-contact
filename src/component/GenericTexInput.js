import React, { PureComponent } from 'react';
import { TextInput, View, Text, Image } from 'react-native';

const defaultTextStyle = {
  fontSize: 16,
};

const styles ={
  inputStyle: {
    fontSize: 14,
    marginTop: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
  subtitleText: {
    ...defaultTextStyle,
    color: '#9b9b9b',
  },
  errorText: {
    ...defaultTextStyle,
    color: '#f93149',
  },
  warningText: {
    ...defaultTextStyle,
    color: '#f58220',
  },
};

class GenericTextInput extends PureComponent {
  render() {
    const {
      input,
      inputStyle,
      subtitle,
      description,
      descriptionStyle,
      editable = true,
      meta: {
        touched,
        error,
        warning,
      },
      icon,
      iconStyle,
      ...inputProps
    } = this.props;

    return (
      <View>
        <TextInput
          {...inputProps}
          editable={editable}
          style={[styles.inputStyle, inputStyle]}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
        />
        {
          description && <Text style={[styles.subtitleText, descriptionStyle]}>{description}</Text>
        }
        {
          (!touched && subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>) ||
          (touched && error && <Text style={styles.errorText}>{error}</Text>) ||
          (touched && warning && <Text style={styles.warningText}>{warning}</Text>)
        }
        {
          icon &&
          <Image
            source={icon}
            style={[styles.inputIcon, iconStyle]}
          />
        }
      </View>
    );
  }
}

export default GenericTextInput;
