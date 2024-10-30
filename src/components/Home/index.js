import {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {topicsList} from '../../constants'
import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './styledComponents'

const Home = () => {
  const {isRegistered, name, topic} = useContext(RegisterContext)
  const history = useHistory()

  const topicDisplayText =
    topicsList.find(each => each.id === topic)?.displayText || ''

  return (
    <div>
      <Header />
      {isRegistered ? (
        <HomeContainer>
          <Name>Hello {name}</Name>
          <Topic>Welcome to {topicDisplayText}</Topic>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      ) : (
        <HomeContainer>
          <HomeHeading>Welcome to Meetup</HomeHeading>
          <HomePara>Please register for the topic</HomePara>
          <Button onClick={() => history.push('/register')}>Register</Button>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      )}
    </div>
  )
}

export default Home
