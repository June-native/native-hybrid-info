import React from 'react'
import styled from 'styled-components'
import { AutoRow, RowBetween, RowFixed } from 'components/Row'
import { TYPE } from 'theme'
import { useEthPrices } from 'hooks/useEthPrices'
import { formatDollarAmount } from 'utils/numbers'
import Polling from './Polling'
import { useActiveNetworkVersion } from '../../state/application/hooks'
import { SupportedNetwork } from '../../constants/networks'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.black};
  padding: 10px 20px;
`

const Item = styled(TYPE.main)`
  font-size: 12px;
`

const TopBar = () => {
  const ethPrices = useEthPrices()
  const [activeNetwork] = useActiveNetworkVersion()
  return (
    <Wrapper>
      <RowBetween>
        <Polling />
        <AutoRow $gap="6px">
          <RowFixed>
            {activeNetwork.id === SupportedNetwork.CELO ? (
              <Item>Celo Price:</Item>
            ) : activeNetwork.id === SupportedNetwork.BNB ? (
              <Item>BNB Price:</Item>
            ) : activeNetwork.id === SupportedNetwork.AVALANCHE ? (
              <Item>AVAX Price:</Item>
            ) : (
              <Item>Eth Price:</Item>
            )}
            <Item fontWeight="700" ml="4px">
              {formatDollarAmount(ethPrices?.current)}
            </Item>
          </RowFixed>
        </AutoRow>
      </RowBetween>
    </Wrapper>
  )
}

export default TopBar
