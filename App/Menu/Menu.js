//
//  Menu
//  blank02
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { StyleSheet } from "react-native"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { LinearGradient } from "expo"
import { strings } from "./../Locales/i18n"


export default class Menu extends React.Component {

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


	onButtonBankPressed = () => {
		const { navigate } = this.props.navigation
		navigate("Form", {})
	}

	onButtonMobilePressed = () => {
    console.log('onButtonMobilePressed');
	}

	componentDidMount() {

		// Additional component initialization can go here.
		// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	}

	render() {

		return (
			<View style={styles.menuView}>
				<LinearGradient end={{
					x: -0.04,
					y: 1.13
				}} start={{
					x: 0.95,
					y: -0.13
				}} colors={["rgba(0, 227, 255, 0.97)", "rgba(144, 51, 255, 1)"]} locations={[0.00, 1.00]} style={styles.heroViewLinearGradient}>
					<View style={styles.heroView}>
						<Text style={styles.applyingForServiceText}><Text style={{
							color: "rgba(255, 255, 255, 1)",
							fontFamily: "SFProDisplay-Light",
							fontSize: 40.00,
							fontStyle: "normal",
							textAlign: "left",
							letterSpacing: 0.00,
							fontFamily: "SFProDisplay-Bold",
							fontSize: 40.00,
							fontStyle: "normal"
						}}>Applying</Text><Text style={{
							color: "rgba(255, 255, 255, 1)",
							fontFamily: "SFProDisplay-Light",
							fontSize: 40.00,
							fontStyle: "normal",
							textAlign: "left",
							letterSpacing: 0.00,
							fontFamily: "SFProDisplay-Medium",
							fontSize: 40.00,
							fontStyle: "normal"
						}}>{"\n"}</Text>for services{"\n"}<Text style={{
							color: "rgba(255, 255, 255, 1)",
							fontFamily: "SFProDisplay-Light",
							fontSize: 40.00,
							fontStyle: "normal",
							textAlign: "left",
							letterSpacing: 0.00,
							fontFamily: "SFProDisplay-Light",
							fontSize: 20.00,
							fontStyle: "normal"
						}}>in Norway</Text></Text>
					</View>
				</LinearGradient>
				<View pointerEvents="box-none" style={{
					position: "absolute",
					width: "100%",
					height: "100%"
				}}>
					<View pointerEvents="box-none" style={{
						flexDirection: "row",
						alignSelf: "stretch"
					}}>
						<TouchableOpacity onPress={this.onButtonBankPressed} style={styles.buttonBankButtonTouchable}>
							<Text style={styles.buttonBankButton}>{strings("Menu.buttonBankButtonText")}</Text>
						</TouchableOpacity>
						<View pointerEvents="box-none" style={{
							flexDirection: "row",
							justifyContent: "flex-end",
							flex: 1
						}}>
							<TouchableOpacity onPress={this.onButtonMobilePressed} style={styles.buttonMobileButtonTouchable}>
								<Text style={styles.buttonMobileButton}>{strings("Menu.buttonMobileButtonText")}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	menuView: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		flex: 1
	},
	heroView: {
		height: "100%"
	},
	heroViewLinearGradient: {
		alignSelf: "stretch",
		height: 426.00,
		marginRight: -1.00
	},
	applyingForServiceText: {
		color: "rgba(255, 255, 255, 1)",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 40.00,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.00,
		backgroundColor: "rgba(0, 0, 0, 0)",
		marginLeft: 36.00,
		marginTop: 105.00
	},
	buttonBankButton: {
		color: "rgba(255, 255, 255, 1)",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 16.00,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.00,
		justifyContent: "center",
		alignSelf: "stretch",
		width: "100%"
	},
	buttonBankButtonTouchable: {
		backgroundColor: "rgba(50, 70, 241, 1)",
		borderRadius: 10.00,
		width: 150.00,
		height: 210.00,
		marginLeft: 25.00,
		marginTop: 321.00,
		justifyContent: "center"
	},
	buttonMobileButton: {
		color: "rgba(255, 255, 255, 1)",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 16.00,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.00,
		justifyContent: "center",
		alignSelf: "stretch",
		width: "100%"
	},
	buttonMobileButtonTouchable: {
		backgroundColor: "rgba(0, 195, 255, 1)",
		borderRadius: 10.00,
		width: 150.00,
		height: 210.00,
		marginTop: 366.00,
		marginRight: 29.00,
		justifyContent: "center"
	}
})
