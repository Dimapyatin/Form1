import React from 'react'

export default function Main({inputLogin, inputName, inputSurname}) {
  return (
    <div>
      <h1>Умничка ты моя</h1> 
      <h3>Ты вошел в акаунт</h3>
      <p>Ваше имя {inputName}</p>
      <p>Ваша фамилия {inputSurname}</p>
      <p>Ваш логин {inputLogin}</p>
    </div>
  )
}
