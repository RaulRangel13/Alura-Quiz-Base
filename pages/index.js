import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size:cover;
  background-position:center;
`;

Widget.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
   padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground BackgroundImage = {db.bg}>
      <QuizContainer>
        <Widget.Header>
          <h1>The legend of zelda</h1>
        </Widget.Header>
        
        <Widget.Content>
          <h1>Teste</h1>

          <p>teste do quiz alura</p>
        </Widget.Content>

        <Widget.Content>
          <p>teste do quiz alura</p>
        </Widget.Content>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl = "https://github.com/RaulRangel13" />
    </QuizBackground>
  )
}
