//
//  Form
//  blank02
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { StyleSheet } from "react-native"
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity } from "react-native"
import { strings } from "./../Locales/i18n"

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  // ADD YOUR FIREBASE CREDENTIALS
  apiKey: "AIzaSyAD6GA88buB1A_br1HTLQhHGqtenxbpXfo",
  authDomain: "eng-particle-207822.firebaseapp.com",
  databaseURL: "https://eng-particle-207822.firebaseio.com",
  projectId: "eng-particle-207822",
  storageBucket: "eng-particle-207822.appspot.com",
  messagingSenderId: "788175252477"
};

firebase.initializeApp(firebaseConfig);




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
	}


	onButtonNextPressed = () => {
		const { navigate } = this.props.navigation
		navigate("Finish", {})
	}

	componentDidMount() {

		// Additional component initialization can go here.
		// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	}

	
	render() {

		return (
			<View style={styles.formView}>
				<TouchableOpacity onPress={this.onButtonBackPressed} style={styles.buttonBackButtonTouchable}>
					<Image style={styles.buttonBackButton} source={require("./../../Assets/images/button-back.png")} />
				</TouchableOpacity>
				
					<View style={styles.formListView}>
					<Text style={styles.titleText}>{strings("Form.titleTextText")}</Text>

					<View pointerEvents="box-none" style={{
						flexDirection: "row",
						alignSelf: "stretch"
					}} />
					<View pointerEvents="box-none" style={{
						flexDirection: "row",
						alignSelf: "stretch"
					}} />
					<ScrollView 
						showsVerticalScrollIndicator={false}
						vertical={true}
						snapToAlignment="end"
						pointerEvents="box-none" style={{
							position: 'absolute',
							paddingTop: 20,
							marginTop: 0
						}}>
						
					<TextInput placeholder={strings("Form.firstnameTextInputText")} style={styles.firstnameTextInput} />
					<TextInput placeholder={strings("Form.familynameTextInputText")} style={styles.familynameTextInput} />		
					<TextInput placeholder={strings("Form.taxnumberTextInputText")} style={styles.taxnumberTextInput} />
					<TextInput placeholder={strings("Form.phonenumberTextInputText")} style={styles.phonenumberTextInput} />
					<TextInput placeholder={strings("Form.emailTextInputText")} style={styles.emailTextInput} />
					<TextInput placeholder={strings("Form.addressTextInputText")} style={styles.addressTextInput} />
					<TextInput placeholder={strings("Form.postcodeTextInputText")} style={styles.postcodeTextInput} />
					<TextInput placeholder={strings("Form.cityTextInputText")} style={styles.cityTextInput} />
					<TouchableOpacity onPress={this.onButtonNextPressed} style={styles.buttonNextButtonTouchable}>
						<Text style={styles.buttonNextButton}>{strings("Form.buttonNextButtonText")}</Text>
					</TouchableOpacity>
					</ScrollView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	formView: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		flex: 1
	},
	buttonBackButton: {
	},
	buttonBackButtonTouchable: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		width: 15.00,
		height: 8.00,
		marginLeft: 13.00,
		marginTop: 40.00,
		justifyContent: "center"
	},
	formListView: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "stretch",
		height: 1000,
		marginLeft: 13.00,
		marginTop: 35.00,
		marginRight: 17.00
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
		marginTop: 10.00,
		marginRight: 10.00
	},
	firstnameTextInput: {
		color: "rgba(0, 0, 0, 1)",
		fontFamily: "SFProText-Regular",
		fontSize: 14.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "stretch",
		height: 48.00,
		marginTop: 40.00	
	},
	familynameTextInput: {
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
	taxnumberTextInput: {
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
	phonenumberTextInput: {
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
	emailTextInput: {
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
	addressTextInput: {
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
	postcodeTextInput: {
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
	cityTextInput: {
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
		justifyContent: "center"
	}
})