import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #f6f9fc, #eef3f8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;

  input {
    width: 260px;
    height: 40px;
    border: 1px solid #cfd8e3;
    border-radius: 10px;
    padding: 0 12px;
    font-size: 16px;
    margin: 20px 0 10px;
    outline: none;
  }

  input:focus {
    border-color: #7fb8e6;
    box-shadow: 0 0 0 3px rgba(127, 184, 230, 0.2);
  }

  h3 {
    margin: 8px 0;
    color: #1f2d3d;
  }
`