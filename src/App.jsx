
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FormIn from './components/formIn/FormIn'
import FormReg from './components/formReg/FormReg'
import Main from './components/main/Main'
import { useState } from 'react';

function App() {
  const navigate = useNavigate();

  const formMapReg = () => {
    navigate('/FormReg')
  }

  const formMapIn = () => {
    navigate('/')
  }

  // форма регистрации

  const [inputSurname, setInputSurname] = useState('');
  const handleInputChangeSurname = (event) => {
    setInputSurname(event.target.value);
  }

  const [inputName, setInputName] = useState('');
  const handleInputChangeName = (event) => {
    setInputName(event.target.value);
  }

  const [inputLogin, setInputLogin] = useState('');
  const handleInputChangeLogin = (event) => {
    setInputLogin(event.target.value);
  }

  const [inputPassword, setInputPassword] = useState('');
  const handleInputChangePassword = (event) => {
    setInputPassword(event.target.value);
  }

  const [inputMail, setInputMail] = useState('');
  const handleInputChangeMail = (event) => {
    setInputMail(event.target.value);
  }

  // отправка на сервер



  const addFormRegData = () => {

    fetch('http://5.35.88.28:1001/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ surname: inputSurname, name: inputName, login: inputLogin, password: inputPassword, email: inputMail }),
    })
      .then(response => {
        console.log('статус код: ', response.status);
        if (!response.ok) {
          throw new Error('Сеть ответила с кодом: ' + response.status);
        }
        setTimeout(() => {
          navigate('/Main');
        }, 1000)
        return response.json();
        // navFormIn();
      })
      // .then((response) => response.json())
      .then(data => {
        console.log(data.detail)
        localStorage.setItem('token', data.token)
      })
      .catch(error => {
        console.error('Произошла ошибка: ', error);
        alert('Такой логи уже занят')
      });

  }

  // отправка данных формы входа

  const [inputLogin2, setInputLoginIn] = useState('');
  const handleInputChangeLoginIn = (event) => {
    setInputLoginIn(event.target.value);
  }

  const [inputPassword2, setInputPasswordIn] = useState('');
  const handleInputChangePasswordIn = (event) => {
    setInputPasswordIn(event.target.value);
  }

  const addFormInData = () => {
    fetch('http://5.35.88.28:1001/entrance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: inputLogin2, password: inputPassword2 })
    })
      .then(response => {
        console.log('статус код: ', response.status);
        if (!response.ok) {
          throw new Error('Сеть ответила с кодом: ' + response.status);
        }     
        resultFromRegData();
        
        return response.json();
        // navFormIn();
      })
      // .then(response => response.json())
      .then(data => {
        console.log(data.detail)
        localStorage.setItem('token', data.token)
      })
      .catch(error => {
        console.error('Произошла ошибка: ', error);
        alert('Вы не зарегестрировались')
      });



    // setTimeout(() => {
    //   navigate('/Main');
    // }, 1000)


  }





  // вывод данных с сервера
  const resultFromRegData = () => {
    console.log(localStorage.getItem('token'))
    fetch('http://5.35.88.28:1001/checkUser', {
      method: 'GET',
      headers: {
        'token': localStorage.getItem('token')
      }
    })
      .then(response => {
        console.log('статус код: ', response.status);
        if (!response.ok) {
          throw new Error('Сеть ответила с кодом: ' + response.status);
        }
          navigate('/Main');
        return response.json();
        // navFormIn();
      })
      // .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Произошла ошибка: ', error);
        alert('Вы не зарегестрировались')
      });

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log()
  };

  return (
    <Routes>
      <Route path='/Form1/' element={
        <FormIn
          formMapReg={formMapReg}
          inputLogin2={inputLogin2}
          handleInputChangeLoginIn={handleInputChangeLoginIn}

          inputPassword2={inputPassword2}
          handleInputChangePasswordIn={handleInputChangePasswordIn}

          handleSubmit={handleSubmit}
          addFormInData={addFormInData}

        />} />
      <Route path='/FormReg' element={
        <FormReg
          formMapIn={formMapIn}
          inputSurname={inputSurname}
          handleInputChangeSurname={handleInputChangeSurname}

          inputName={inputName}
          handleInputChangeName={handleInputChangeName}

          inputLogin={inputLogin}
          handleInputChangeLogin={handleInputChangeLogin}

          inputPassword={inputPassword}
          handleInputChangePassword={handleInputChangePassword}

          inputMail={inputMail}
          handleInputChangeMail={handleInputChangeMail}

          handleSubmit={handleSubmit}

          addFormRegData={addFormRegData}

        />} />
      <Route path='/Main' element={<Main 
      inputLogin={inputLogin}
      inputName={inputName}
      inputSurname={inputSurname}
      />} />
    </Routes>
  );
}

export default App;
