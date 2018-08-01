//
//  App
//  blank02
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { createStackNavigator } from "react-navigation"
import { Font } from "expo"
import I18n from "i18n-js"
import { DangerZone } from "expo"
import * as firebase from "firebase"

import Menu from "./App/Menu/Menu"
import Form from "./App/Form/Form"
import Finish from "./App/Finish/Finish"
import { firebaseConfig2 } from "./App/constants"

const PushRouteOne = createStackNavigator({
	Form: {
		screen: Form
	},
	Finish: {
		screen: Finish
	},
	Menu: {
		screen: Menu
	}
}, {
	initialRouteName: "Menu"
})

const RootStack = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne
	}
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne"
})


export default class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			fontsReady: false,
			localeReady: false
		}
	}


	async initProjectFonts() {

		// Any additional project fonts can be fetched here.
		await Font.loadAsync({ 'SFProDisplay-Bold': require('./Assets/fonts/SFProDisplayBold.otf'), 'SFProText-Medium': require('./Assets/fonts/SFProTextMedium.otf'), 'SFProDisplay-Light': require('./Assets/fonts/SFProDisplayLight.otf'), 'SFProText-Regular': require('./Assets/fonts/SFProTextRegular.otf'), 'SFProDisplay-Medium': require('./Assets/fonts/SFProDisplayMedium.otf'), 'SFProText-Semibold': require('./Assets/fonts/SFProTextSemibold.otf') })
		this.setState({
			fontsReady: true
		})
	}

	async initLocale() {

		I18n.locale = await DangerZone.Localization.getCurrentLocaleAsync()
		this.setState({
			localeReady: true
		})
	}

	componentDidMount() {

		this.initProjectFonts()
    this.initLocale()
    
    firebase.initializeApp(firebaseConfig2);
		
		// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	}

	render() {

		if (!this.state.fontsReady || !this.state.localeReady) { return (<Expo.AppLoading/>); }
		return (
			<RootStack />
		)
	}
}
