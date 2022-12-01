import { Model } from 'sequelize/types'

export interface Challenge extends Model {
  name: string
  category: string
  description: string
  solved: boolean
  difficulty: integer
  hint: string
  hintUrl: string
  mitigationUrl?: string
  key_challenge: string
  disabledEnv?: string | string[]
  tutorial?: { order: integer }
  tags?: string[]
  tutorialOrder?: integer
}

export interface User extends Model {
  id: integer
  username?: string
  email: string
  password: string
  customDomain?: string
  key: string
  role: string
  deletedFlag?: boolean
  profileImage?: string
  securityQuestion?: {
    id: integer
    answer: string
  }
  feedback?: {
    comment: string
    rating: integer
  }
  address?: Address[]
  card?: Card[]
  totpSecret?: string
  walletBalance?: integer
  lastLoginIp?: string
}

export interface Delivery extends Model {
  name: string
  price: integer
  deluxePrice: integer
  eta: integer
  icon: string
}

export interface Address extends Model {
  fullName: string
  mobileNum: integer
  zipCode: string
  streetAddress: string
  city: string
  state: string
  country: string
}

export interface Card extends Model {
  fullName: string
  cardNum: integer | string
  expMonth: integer
  expYear: integer
}

export interface Product extends Model {
  id: integer
  name: string
  description: string
  price?: integer
  deluxePrice?: integer
  quantity?: integer
  limitPerUser?: integer
  image?: string
  reviews?: Review[]
  deletedDate?: string
  deletedAt?: Date | string
  useForChristmasSpecialChallenge?: boolean
  keywordsForPastebinDataLeakChallenge?: string[]
  urlForProductTamperingChallenge?: string
  fileForRetrieveBlueprintChallenge?: string
}

export interface Review extends Model {
  text: string
  author: string
  liked: boolean
  likedBy: string[]
}

export interface Memory extends Model {
  image: string
  imagePath: string
  caption: string
  user: string
  geoStalkingMetaSecurityQuestion?: integer
  geoStalkingMetaSecurityAnswer?: string
  geoStalkingVisualSecurityQuestion?: integer
  geoStalkingVisualSecurityAnswer?: string
}

export interface Recycle extends Model {
  UserId: integer
  quantity: integer
  AddressId: integer
  date: string
  isPickup: boolean
}

export interface SecurityQuestion extends Model {
  question: string
}

export interface SecurityAnswer extends Model {
  answer: string
  UserId: integer
  SecurityQuestionId: integer
}

export interface Basket extends Model {
  id: integer
  Products: Product[]
  coupon: string
}

export interface BasketItem extends Model {
  ProductId: integer
  BasketId: integer
  quantity: integer
}

export interface Captcha extends Model {
  captcha: string
  answer: string
}
