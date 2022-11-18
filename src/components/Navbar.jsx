import React from 'react';

const Navbar = () => {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
   
                <ul id="menu">
                    <li><h1>Welcome to Molang's world!</h1></li>
                    <li><p className='para'>Molang is a French-South Korean animated children's television series created by the animation 
                        studio Millimages. The titular character, Molang, was designed by the Korean illustrator Hye-Ji Yoon on the platform KakaoTalk.</p></li>
                    <li><p className='para'>The series first aired on Canal+ France in November 2, 2015. Since then, now 5 seasons, 9 TV specials 
                        and a music album have been produced and are widely broadcast.</p></li>
                    <li><h1>Made By:</h1></li>
                    <li><p className='head'>Prince Joseph Esteves</p></li>
                </ul>
            </div>
        </nav>
      );
}
export default Navbar;