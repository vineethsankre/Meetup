import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import { topicsList } from '../../constants'
import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        const foundTopic = topicsList.find(eachTopic => eachTopic.id === topic)
        const topicName = foundTopic ? foundTopic.displayText : ''
        return (
          <div>
            <Header />
            {isRegistered ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topicName}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
