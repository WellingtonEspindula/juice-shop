/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { AddressModelInit } from './address'
import { BasketModelInit } from './basket'
import { BasketItemModelInit } from './basketitem'
import { CaptchaModelInit } from './captcha'
import { CardModelInit } from './card'
import { ChallengeModelInit } from './challenge'
import { ComplaintModelInit } from './complaint'
import { DeliveryModelInit } from './delivery'
import { FeedbackModelInit } from './feedback'
import { ImageCaptchaModelInit } from './imageCaptcha'
import { MemoryModelInit } from './memory'
import { PrivacyRequestModelInit } from './privacyRequests'
import { ProductModelInit } from './product'
import { QuantityModelInit } from './quantity'
import { RecycleModelInit } from './recycle'
import { relationsInit } from './relations'
import { SecurityAnswerModelInit } from './securityAnswer'
import { SecurityQuestionModelInit } from './securityQuestion'
import { UserModelInit } from './user'
import { WalletModelInit } from './wallet'

/* jslint node: true */

const Sequelize = require('sequelize')

const sequelize = new Sequelize('mariadb1', 'mariadb1', '^^U98svZH1B3hAHkd#WNrx!ULij$P7pT!Qa^bKO#', {
  host: 'mariadb1.ctw27a5rnusn.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialect: 'mariadb',
  dialectOptions: {
    connectTimeout: 3000
  },
  pool: {
    min: 0,
    max: 5,
    idle: 10000
  },
  define: {
    charset: 'utf8',
    timestamps: false
  },  
  retry: {
    match: [
      /ER_CONNECTION_TIMEOUT/,
      /ER_SOCKET_UNEXPECTED_CLOSE/,
    ],
    name: 'query',
    max: 5
  },
  transactionType: 'IMMEDIATE',
  logging: false
})
AddressModelInit(sequelize)
BasketModelInit(sequelize)
BasketItemModelInit(sequelize)
CaptchaModelInit(sequelize)
CardModelInit(sequelize)
ChallengeModelInit(sequelize)
ComplaintModelInit(sequelize)
DeliveryModelInit(sequelize)
FeedbackModelInit(sequelize)
ImageCaptchaModelInit(sequelize)
MemoryModelInit(sequelize)
PrivacyRequestModelInit(sequelize)
ProductModelInit(sequelize)
QuantityModelInit(sequelize)
RecycleModelInit(sequelize)
SecurityAnswerModelInit(sequelize)
SecurityQuestionModelInit(sequelize)
UserModelInit(sequelize)
WalletModelInit(sequelize)

relationsInit(sequelize)

export { sequelize }
