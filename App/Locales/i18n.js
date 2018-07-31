//
//  i18n.js
//  blank02
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import I18n from "i18n-js"
import en from "./en.json"

I18n.fallbacks = true

I18n.translations = { en }

export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n;
