import styled from 'styled-components/macro';

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, purple);
  background-clip: text;
  -webkit-background-clip: text;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
  color: transparent;
  transition: 500ms ease;
  }
`;
const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://spotify-clone-psg-v2.herokuapp.com/login';

const Login = () => (
  <StyledLoginContainer>
    <StyledLoginButton href={LOGIN_URI}>
      Log in to Spotify
    </StyledLoginButton>
  </StyledLoginContainer>
);

export default Login;