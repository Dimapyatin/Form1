import './FormIn.css';
import iconUser from '../../public/logo-user.png';
import React from 'react';
import FormReg from '../formReg/FormReg';

function FormIn({
    formMapReg,
    inputLoginIn, handleInputChangeLoginIn,
    inputPasswordIn, handleInputChangePasswordIn,

    handleSubmit,
    addFormInData
    
    }) {

    return (
        <div className='cnt_form'>
            <div className="wrapperForm fadeInDown" >
                <div id="formContent">
                    <h2 className="active">В О Й Д И Т Е </h2>
                    <div className="fadeIn first">
                        <img className="icon_user" src={iconUser}  id="icon" alt="User Icon" />
                    </div>
                    <form 
                    onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            id="input_login"
                            className="fadeIn second input_form"
                            name="login"
                            placeholder="Введите логин"
                            value={inputLoginIn}
                            onChange={handleInputChangeLoginIn}
                        />

                        <input
                            type="password"
                            id="input_password"
                            className="fadeIn third input_form"
                            name="login"
                            placeholder="Введите пароль"
                            value={inputPasswordIn}
                            onChange={handleInputChangePasswordIn}
                        />

                        {/* <input
                            type="email"
                            id="input_mail"
                            className="fadeIn fith input_form"
                            name="mail"
                            placeholder="Введите адрес электронной почты"
                            // value={inputValueMail}
                            // onChange={handleInputChangeMail}
                        /> */}
                        <div className='Cont_Form_But'>
                             <div>  <button type="submit" 
                        className='Form_Btn_In'
                        // className="fadeIn fourth" 
                        onClick={function buttonLogin() {
                            addFormInData();
                        }}
                        >ВОЙТИ</button></div>
                         <div> <button onClick={formMapReg} type="submit" 
                         className='Form_Btn_Reg'
                        // className="fadeIn fourth" 
                        // onClick={function buttonLogin() {
                        //     // hideForm();
                        // }}
                        >ЗАРЕГИСТРИРУЙТЕСЬ</button> </div>
                        </div>
                      
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormIn;
