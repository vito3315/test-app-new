import { shallow } from 'zustand/shallow';
import { useHeaderStore } from '@/components/store';

import MyTextInput from '@/ui/MyTextInput';
import { IconClose } from '@/ui/Icons';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Start() {
  console.log('render Start');

  const [closeModalAuth, logIn, errTextAuth, navigate, changeLogin, setPwdLogin, loginLogin, pwdLogin, checkLoginKey, showPassword, clickShowPassword, loading] = useHeaderStore(
    (state) => [state.closeModalAuth, state.logIn, state.errTextAuth, state.navigate, state.changeLogin, state.setPwdLogin, state.loginLogin, state.pwdLogin,
      state.checkLoginKey, state.showPassword, state.clickShowPassword, state.loading], shallow);

  return (
    <>
      <Backdrop style={{ zIndex: 99 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="modalLoginStart">
        <IconButton style={{ position: 'absolute', top: -50, left: 10, backgroundColor: 'transparent' }} onClick={closeModalAuth}>
          <IconClose style={{ width: 35, height: 35, overflow: 'visible', borderRadius: 50, background: 'rgba(0, 0, 0, 0.5)' }}/>
        </IconButton>

        <div className="loginHeader">
          <Typography component="h2">Вход</Typography>
        </div>

        <MyTextInput
          type="phone"
          placeholder="телефон"
          value={loginLogin}
          func={(event) => changeLogin(event)}
          onKeyDown={(event) => checkLoginKey(1, event)}
          className={!errTextAuth ? 'inputLogin' : 'inputLogin err'}
        />

        <MyTextInput
          type={showPassword ? 'text' : 'password'}
          placeholder="пароль"
          value={pwdLogin}
          func={(event) => setPwdLogin(event)}
          onKeyDown={(event) => checkLoginKey(1, event)}
          className={!errTextAuth ? 'inputLogin' : 'inputLogin err'}
          inputAdornment={<InputAdornment position="end"><IconButton aria-label="toggle password visibility" onClick={clickShowPassword}>
                {showPassword ? <VisibilityOutlinedIcon style={{ fill: 'rgba(0, 0, 0, 0.2)', height: '40px', width: '47px' }}/> :
                  <VisibilityOffOutlinedIcon style={{ fill: 'rgba(0, 0, 0, 0.2)', height: '40px', width: '47px' }}/>
                }</IconButton></InputAdornment>
          }
        />

        <div className="loginLosePWD" style={{ marginBottom: errTextAuth ? '15px' : '118px' }}>
          <Typography component="span" onClick={() => navigate('resetPWD')}>Забыли пароль?</Typography>
        </div>

        {!errTextAuth ? null : (
          <div className="loginErr">
            <Typography component="span">{errTextAuth}</Typography>
          </div>
        )}
        
        <div 
          className="loginLogin"
          onClick={loginLogin.length === 11 && pwdLogin.length > 1 ? logIn : null}
          style={{ backgroundColor: loginLogin.length === 11 && pwdLogin.length > 1 ? '#DD1A32' : 'rgba(0, 0, 0, 0.2)' }}
        >
          <Typography component="span">Войти</Typography>
        </div>

        <div className="loginCreate" onClick={() => navigate('create')}>
          <Typography component="span">Зарегистрироваться</Typography>
        </div>

        <div className="loginSMS">
          <Typography component="span" onClick={() => navigate('loginSMS')}>
            Вход по СМС
          </Typography>
        </div>
      </div>
    </>
  );
}
