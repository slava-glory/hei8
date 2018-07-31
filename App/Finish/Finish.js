//
//  Finish
//  blank02
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { StyleSheet } from "react-native"
import { View, TouchableOpacity, Text, Image } from "react-native"
import { strings } from "./../Locales/i18n"


export default class Finish extends React.Component {

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


	onButtonFinishPressed = () => {
		const { navigate } = this.props.navigation
		navigate("Menu", {})
	}

	componentDidMount() {

		// Additional component initialization can go here.
		// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	}

	render() {

		return (
			<View style={styles.finishView}>
				<View style={styles.heroView}>
					<Image style={styles.personImage} source={require("./../../Assets/images/person.png")} />
					<Text style={styles.yourApplicationIsText}>Your application is on it’s way</Text>
					<View pointerEvents="box-none" style={{
						justifyContent: "flex-end",
						flex: 1
					}}>
						<Text style={styles.youWillGetAnEmaiText}>{strings("Finish.youWillGetAnEmaiTextText")}</Text>
						<Text style={styles.dNumberAcceptanceText}>{strings("Finish.dNumberAcceptanceTextText")}</Text>
						<Text style={styles.workContractText}>{strings("Finish.workContractTextText")}</Text>
					</View>
				</View>
				<View pointerEvents="box-none" style={{
					justifyContent: "flex-end",
					flex: 1
				}}>
					<TouchableOpacity onPress={this.onButtonFinishPressed} style={styles.buttonFinishButtonTouchable}>
						<Text style={styles.buttonFinishButton}>{strings("Finish.buttonFinishButtonText")}</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	finishView: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		flex: 1
	},
	buttonFinishButton: {
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
		width: "100%"
	},
	buttonFinishButtonTouchable: {
		backgroundColor: "rgba(237, 0, 142, 1)",
		borderRadius: 24.00,
		shadowOffset: {width: 0.0, height: 2.0},
		shadowColor: "rgba(237, 0, 142, 1)",
		shadowRadius: 2.00,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 312.00,
		height: 48.00,
		marginBottom: 38.00,
		justifyContent: "center"
	},
	heroView: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "stretch",
		height: 526.00,
		marginLeft: 1.00,
		marginRight: -1.00
	},
	yourApplicationIsText: {
		color: "rgba(0, 0, 0, 1)",
		fontFamily: "SFProText-Medium",
		fontSize: 18.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 26.00,
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "center",
		width: 222.00,
		marginTop: 27.00
	},
	youWillGetAnEmaiText: {
		color: "rgba(144, 154, 162, 1)",
		fontFamily: "SFProText-Regular",
		fontSize: 14.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "center",
		width: 301.00,
		marginBottom: 29.00
	},
	dNumberAcceptanceText: {
		color: "rgba(144, 154, 162, 1)",
		fontFamily: "SFProText-Regular",
		fontSize: 14.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "center",
		marginBottom: 11.00
	},
	workContractText: {
		color: "rgba(144, 154, 162, 1)",
		fontFamily: "SFProText-Regular",
		fontSize: 14.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "center"
	},
	personImage: {
		resizeMode: "stretch",
		backgroundColor: "rgba(0, 0, 0, 0)",
		alignSelf: "center",
		marginTop: 28.00
	}
})
