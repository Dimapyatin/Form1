import './FormReg.css';
import iconUser from '../../public/logo-user.png';
import React from 'react';

function FormReg({ 
    formMapIn, inputSurname, handleInputChangeSurname, 
    inputName, handleInputChangeName,
    inputLogin, handleInputChangeLogin,
    inputPassword, handleInputChangePassword,
    inputMail, handleInputChangeMail,
   
   
   
    handleSubmit,
    addFormRegData

}) {
    console.log(inputSurname);
    return (
        <div className='cnt_form'>
            <div className="wrapperForm fadeInDown" >
                <div id="formContent">
                    <h2 className="active">ЗАРЕГИСТРИРУЙТЕСЬ </h2>
                    <div className="fadeIn first">
                        <img className="icon_user" src={iconUser} id="icon" alt="User Icon" />
                    </div>
                    <form
                    onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            id="input_surname"
                            className="fadeIn second input_form"
                            name="surname"
                            placeholder="Введите фамилию"
                            value={inputSurname}
                            onChange={handleInputChangeSurname}
                        />
                        <input
                            type="text"
                            id="input_name"
                            className="fadeIn second input_form"
                            name="name"
                            placeholder="Введите имя"
                            value={inputName}
                        onChange={handleInputChangeName}
                        />

                        <input
                            type="text"
                            id="input_login"
                            className="fadeIn second input_form"
                            name="login"
                            placeholder="Введите логин"
                        value={inputLogin}
                        onChange={handleInputChangeLogin}
                        />

                        <input
                            type="password"
                            id="input_password"
                            className="fadeIn third input_form"
                            name="login"
                            placeholder="Введите пароль"
                        value={inputPassword}
                        onChange={handleInputChangePassword}
                        />

                        <input
                            type="email"
                            id="input_mail"
                            className="fadeIn fith input_form"
                            name="mail"
                            placeholder="Введите адрес электронной почты"
                        value={inputMail}
                        onChange={handleInputChangeMail}
                        />
                    
                        <div className='Cont_Form_But'>
                            {/* <div>  <button type="submit" 

                        className='Form_Btn_In'
                        onClick={formMapIn}
                        // className="fadeIn fourth" 
                        // onClick={function buttonLogin() {
                        //     // hideForm();
                        // }}
                        >ВОЙТИ</button></div> */}
                            <div> <button type="submit"
                                className='Form_Btn_Reg form_btn_reg_sise'
                                onClick={function buttonLogin() { 
                                    addFormRegData();
                                }}
                            >ЗАРЕГИСТРИРОВАТЬСЯ</button> </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormReg;