import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 70px;
  border-radius: 16px;
  background-color: ${props => props.backcolor || '#999'};
  color: ${props => props.color || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`