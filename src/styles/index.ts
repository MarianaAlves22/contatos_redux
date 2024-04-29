import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  margin: 20px;
`

export default EstiloGlobal
