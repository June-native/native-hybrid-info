import OPTIMISM_LOGO_URL from '../assets/images/optimism.svg'
import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg'
import ETHEREUM_LOGO_URL from '../assets/images/ethereum-logo.png'
import POLYGON_LOGO_URL from '../assets/images/polygon-logo.png'
import CELO_LOGO_URL from '../assets/images/celo-logo.svg'
import BNB_LOGO_URL from '../assets/images/bnb-logo.svg'
import BASE_LOGO_URL from '../assets/images/base-logo.svg'
import { ChainId } from '@june-native/native-hybrid-sdk-core'
import AVALANCHE_LOGO_URL from '../assets/images/avalanche-logo.png'
// TODO: replace logo
import BERACHAIN_LOGO_URL from '../assets/images/berachain-logo.png'

export enum SupportedNetwork {
  ETHEREUM,
  ARBITRUM,
  OPTIMISM,
  POLYGON,
  CELO,
  BNB,
  BASE,
  AVALANCHE,
  BERACHAIN,
}

export type NetworkInfo = {
  chainId: ChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
}

export const EthereumNetworkInfo: NetworkInfo = {
  chainId: ChainId.MAINNET,
  id: SupportedNetwork.ETHEREUM,
  route: '',
  name: 'Ethereum',
  bgColor: '#5c74d0',
  primaryColor: '#5c74d0',
  secondaryColor: '#2172E5',
  imageURL: ETHEREUM_LOGO_URL,
}

export const ArbitrumNetworkInfo: NetworkInfo = {
  chainId: ChainId.ARBITRUM_ONE,
  id: SupportedNetwork.ARBITRUM,
  route: 'arbitrum',
  name: 'Arbitrum',
  imageURL: ARBITRUM_LOGO_URL,
  bgColor: '#0A294B',
  primaryColor: '#0490ED',
  secondaryColor: '#96BEDC',
}

export const OptimismNetworkInfo: NetworkInfo = {
  chainId: ChainId.OPTIMISM,
  id: SupportedNetwork.OPTIMISM,
  route: 'optimism',
  name: 'Optimism',
  bgColor: '#F01B36',
  primaryColor: '#F01B36',
  secondaryColor: '#FB7876',
  imageURL: OPTIMISM_LOGO_URL,
}

export const PolygonNetworkInfo: NetworkInfo = {
  chainId: ChainId.POLYGON,
  id: SupportedNetwork.POLYGON,
  route: 'polygon',
  name: 'Polygon',
  bgColor: '#8247e5',
  primaryColor: '#8247e5',
  secondaryColor: '#FB7876',
  imageURL: POLYGON_LOGO_URL,
}
export const CeloNetworkInfo: NetworkInfo = {
  chainId: ChainId.CELO,
  id: SupportedNetwork.CELO,
  route: 'celo',
  name: 'Celo',
  bgColor: '#02502F',
  primaryColor: '#35D07F',
  secondaryColor: '#9ACDB2',
  imageURL: CELO_LOGO_URL,
}

export const BNBNetworkInfo: NetworkInfo = {
  chainId: ChainId.BNB,
  id: SupportedNetwork.BNB,
  route: 'bnb',
  name: 'BNB Chain',
  bgColor: '#F0B90B',
  primaryColor: '#F0B90B',
  secondaryColor: '#F0B90B',
  imageURL: BNB_LOGO_URL,
}

export const BaseNetworkInfo: NetworkInfo = {
  chainId: ChainId.BASE,
  id: SupportedNetwork.BASE,
  route: 'base',
  name: 'Base',
  bgColor: '#0052ff',
  primaryColor: '#0052ff',
  secondaryColor: '#0052ff',
  imageURL: BASE_LOGO_URL,
}

export const AvalancheNetworkInfo: NetworkInfo = {
  chainId: 43114,
  id: SupportedNetwork.AVALANCHE,
  route: 'avax',
  name: 'Avalanche',
  bgColor: '#e84142',
  primaryColor: '#e84142',
  secondaryColor: '#e84142',
  imageURL: AVALANCHE_LOGO_URL,
}

export const BerachainNetworkInfo: NetworkInfo = {
  chainId: 80094,
  id: SupportedNetwork.BERACHAIN,
  route: 'berachain',
  name: 'Berachain',
  bgColor: '#bc6940',
  primaryColor: '#bc6940',
  secondaryColor: '#bc6940',
  imageURL: BERACHAIN_LOGO_URL,
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [
  EthereumNetworkInfo,
  BerachainNetworkInfo,
  // PolygonNetworkInfo,
  // OptimismNetworkInfo,
  ArbitrumNetworkInfo,
  // CeloNetworkInfo,
  BNBNetworkInfo,
  BaseNetworkInfo,
  // AvalancheNetworkInfo,
]
