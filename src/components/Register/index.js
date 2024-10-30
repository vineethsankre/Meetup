import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {topicsList} from '../../constants'
import {
  RegisterContainer,
  RegisterImg,
  Form,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

const Register = () => {
  const {
    name,
    topic,
    changeName,
    changeTopic,
    showError,
    registerName,
    updateError,
  } = useContext(RegisterContext)

  const history = useHistory()

  const onSubmit = event => {
    event.preventDefault()
    if (name && topic) {
      registerName()
      history.push('/')
    } else {
      updateError()
    }
  }

  return (
    <div>
      <Header />
      <RegisterContainer>
        <RegisterImg
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <Form onSubmit={onSubmit}>
          <RegisterHeading>Let us join</RegisterHeading>
          <InputContainer>
            <Label htmlFor="name">NAME</Label>
            <Input
              id="name"
              value={name}
              type="text"
              onChange={e => changeName(e.target.value)}
              placeholder="Your name"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="topic">Topics</Label>
            <Select
              id="topic"
              value={topic}
              onChange={e => changeTopic(e.target.value)}
            >
              {topicsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.displayText}
                </option>
              ))}
            </Select>
          </InputContainer>
          <RegisterButton type="submit">Register Now</RegisterButton>
          {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
        </Form>
      </RegisterContainer>
    </div>
  )
}

export default Register
