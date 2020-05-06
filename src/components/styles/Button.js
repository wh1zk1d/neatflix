import styled from 'styled-components'

const Button = styled.a`
  background: var(--color-button-bg);
  border-radius: var(--border-radius);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  padding: calc(var(--base-padding) * 2) calc(var(--base-padding) * 4);
  margin-top: 2.6rem;

  svg {
    vertical-align: sub;
    margin-left: 0.2em;
  }

  &:hover {
    background: var(--color-button-bg_hover);
  }
`

export default Button
