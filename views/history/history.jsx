import './history.scss';
import imghistory1 from './anh1.jpg';
import imghistory2 from './anh2.jpg';
import imghistory4 from './anh4.jpg';
import imghistory6 from './anh6.jpg';
import imghistory7 from './anh7.jpg';
import imghistory10 from './anh10.jpg';

function history(){
    const image = [imghistory1,imghistory2,imghistory4,imghistory6,imghistory7,imghistory10];
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </head>
            <div className="history">
                <header>
                    <nav>
                        <ul>
                            <li to="/trangchu">Logo</li>
                            <li><a href="/phimtheonuoc">Phim Theo Nước</a></li>
                            <li><a href="/dexuat">Đề Xuất</a></li>
                            <li><a href="/thong-tin">Thông tin</a></li>
                            <li><a href="/phimle">Phim Lẻ</a></li>
                            <li><a href="/dienvien">Diễn Viên</a></li>
                            <li className="search-container">
                                <input type="text" placeholder="Tìm kiếm phim..." />
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </li>
                            <li><a href="/lichsuxem">Lịch sử</a></li>
                            <a href="/muavip" className="vip-button">VIP</a>
                            <i className="material-icons">account_circle</i>
                            <a href='/login' className='login-button'> <button>LogOut</button></a>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="split-container">
                <div className="left-split">
                    <p className='conten-user'>
                        <h3>ảnh user   </h3>
                        <h3>tên user</h3>
                    </p>
                    <p>
                        <div class="gach"></div>
                    </p>
                    <p>
                        <button className='button-muavip'><h4>Gia Nhập Thành Viên VIP</h4></button>
                    </p>
                    <p>
                        <div class="gach"></div>
                    </p>
                    <p className='gioi-thieu-chuc-nang'>
                        <li>
                            <a href="/lichsuxem">Lịch Sử Xem</a>
                        </li>
                    </p>
                    <p>
                        <div class="gach"></div>
                    </p>
                    <p>
                        <button className='button-dangxuat'><h4>Đăng Xuất</h4></button>
                    </p>
                    
                </div>
                <div className="right-split">
                    <h1>Lịch Sử Bạn Đã Xem</h1>
                    <p>
                        <div class="gach"></div>
                    </p>
                    <p>
                        <div className='history-show'>
                            <img src={image[0]} alt="imageistory1" />
                            <img src={image[1]} alt="imageistory2" />
                            <img src={image[2]} alt="imageistory2" />
                            <img src={image[3]} alt="imageistory2" />
                            <img src={image[4]} alt="imageistory2" />
                            <img src={image[5]} alt="imageistory2" />
                        </div>
                    </p>
                </div>
            </div>
            
        </>
    );
}

export default history;