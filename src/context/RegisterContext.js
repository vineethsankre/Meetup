import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  changeName: null,
  changeTopic: null,
  isRegistered: false,
  registerName: null,
  showError: false,
  updateError: null,
})

export default RegisterContext
