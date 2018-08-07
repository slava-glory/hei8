//
//  Form
//  blank02
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import * as firebase from "firebase"
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native"

import { isEmtyFields } from "./../utils"
import { strings } from "./../Locales/i18n"

export default class Form extends React.Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state
		return {
			header: null,
			headerLeft: null,
			headerRight: null
		}
	}

	constructor(props) {
    super(props)
    this.state = {
      fields: {
        firstName: '',
        familyName: '',
        taxNumber: '',
        phoneNumber: '',
        email: '',
        address: '',
        postcode: '',
        city: '',
      },
      error: '',
    }
	}


	onButtonNextPressed = () => {
    const { navigate } = this.props.navigation
    const { state } = this
    const { fields } = state

    if(!isEmtyFields(fields)) {
      firebase.database().ref('users').push({ ...fields })
        .then(() => {
          navigate("Finish", {})
        })
        .catch(() => {
          this.setState({error: strings("Form.insertDatabaseError")});
        })
    } else {
      this.setState({error: strings("Form.emptyFieldsError")});
    }
  }
  
  onButtonBackPressed = () => {
    const { goBack } = this.props.navigation
		goBack()
  }

	componentDidMount() {

		// Additional component initialization can go here.
    // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  }

  _onTextInputChange = (text, field) => {
    const { error } = this.state;

    if (error) {
      this.setState({error: ''})
    }

    this.setState({fields: {...this.state.fields, [`${field}`]: text}})
  } 

  _renderError = () => {
    const { error } = this.state;

    return (
      <View style={styles.errorMessage}>
        <Text style={styles.errorMessageText}>{error}</Text>
      </View>
    )
  }

	render() {

		return (
			<View style={styles.formView}>
				<TouchableOpacity onPress={this.onButtonBackPressed} style={styles.buttonBackButtonTouchable}>
					<Image style={styles.buttonBackButton} source={require("./../../Assets/images/button-back.png")} />
				</TouchableOpacity>
				
        <Text style={styles.titleText}>{strings("Form.titleTextText")}</Text>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          vertical={true}
          snapToAlignment="end"
        >
          
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'firstName')}
            placeholder={strings("Form.firstnameTextInputText")}
            style={styles.textInputStyles}
          />
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'familyName')}
            placeholder={strings("Form.familynameTextInputText")}
            style={styles.textInputStyles}
          />		
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'taxNumber')}
            placeholder={strings("Form.taxnumberTextInputText")}
            style={styles.textInputStyles}
          />
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'phoneNumber')}
            placeholder={strings("Form.phonenumberTextInputText")}
            style={styles.textInputStyles}
          />
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'email')}
            placeholder={strings("Form.emailTextInputText")}
            style={styles.textInputStyles}
          />
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'address')}
            placeholder={strings("Form.addressTextInputText")}
            style={styles.textInputStyles}
          />
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'postcode')}
            placeholder={strings("Form.postcodeTextInputText")}
            style={styles.textInputStyles}
          />
          <TextInput
            onChangeText={(text) => this._onTextInputChange(text, 'city')}
            placeholder={strings("Form.cityTextInputText")}
            style={styles.textInputStyles}
          />
          {this._renderError()}
          <TouchableOpacity onPress={this.onButtonNextPressed} style={styles.buttonNextButtonTouchable}>
            <Text style={styles.buttonNextButton}>{strings("Form.buttonNextButtonText")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
		)
	}
}

const styles = StyleSheet.create({
	formView: {
		backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
    paddingLeft: 13,
    paddingRight: 17,
	},
	buttonBackButton: {
  },
  errorMessageText: {
    color: "red",
    textAlign: "center",
  },
	buttonBackButtonTouchable: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		width: 15.00,
		height: 8.00,
		marginLeft: 13.00,
		marginTop: 40.00,
		justifyContent: "center"
	},
	titleText: {
		color: "rgba(0, 0, 0, 1)",
		fontFamily: "SFProText-Semibold",
		fontSize: 20.00,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "stretch",
		marginLeft: 10.00,
		marginTop: 45.00,
		marginBottom: 10.00,
		marginRight: 10.00
	},
	textInputStyles: {
		color: "rgba(119, 139, 153, 1)",
		fontFamily: "SFProText-Regular",
		fontSize: 14.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "stretch",
		height: 48.00,
		marginTop: 10.00
	},
	buttonNextButton: {
		color: "rgba(255, 255, 255, 1)",
		fontFamily: "SFProText-Medium",
		fontSize: 16.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.00,
		textShadowOffset: {width: 0.0, height: 2.0},
		textShadowColor: "rgba(237, 0, 142, 1)",
		textShadowRadius: 2.00,
		justifyContent: "center",
		alignSelf: "stretch",
		width: "100%",
		marginLeft: 10.00,
		marginRight: 10.00

	},
	buttonNextButtonTouchable: {
		backgroundColor: "rgba(237, 0, 142, 1)",
		borderRadius: 24.00,
		shadowOffset: {width: 0.0, height: 2.0},
		shadowColor: "rgba(237, 0, 142, 1)",
		shadowRadius: 2.00,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 312.00,
		height: 48.00,
		marginTop: 30.00,
		marginBottom: 30.00,
		justifyContent: "center"
	}
})