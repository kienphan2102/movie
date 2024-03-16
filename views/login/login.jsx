import './App.scss';
import logoGH from './github-mark-white.png';
import logoGM from './logo_gmail_2020q4_color_1x_web_32dp.png';

function login() {
  return (
    <div>
      <div className='container'>
        <div className='login-form'> 
          <form id='from-dangnhapngoa'>
            <form id='form-dangnhap'>
              <h1>Đăng Nhập</h1>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <button type='/submit'>Đăng Nhập</button>
              <button type='addaccount'>Thêm Tài Khoản</button>
              
            </form>
            <div class='radio-dangnhap'>
              <input type="radio" id="rememberPassword" name="rememberPassword" value="yes"></input>
              <label for="rememberPassword">Ghi nhớ mật khẩu</label>
              <a href="/resetPassword" class="reset-Password">Quên Mật Khẩu</a>
              </div>
            <div class='login-add'>
                <h3>Đăng nhập khác</h3>
                <img src={logoGH} alt="github-logo" />
                <img src={logoGM} alt="gmail-logo" />
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default login;