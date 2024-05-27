import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import login from '../img/login_page.png'

function Login() {
    let email = useRef();
    let password = useRef();
    const [check, setCheck] = useState(false);

    function loginHandler() {
        let user_email = email.current.value;
        let pass = password.current.value;

        if (user_email === "" || pass === "") {
            setCheck(true);
            setTimeout(() => {
                setCheck(false);
            }, 3000);
        } else {
            setCheck(false);
        }
    }

    return (
        <div>
            <div className="lg:pt-[50px] md:pt-[40px] pt-0">
                <h1 className="text-xl md:text-2xl p-2 text-black lg:ml-[250px] md:ml-[75px] ml-[40px]">LOGIN NOW</h1>
                <div className="grid grid-cols-2">
                    <div>
                        <input type="email" placeholder="Email" ref={email} className="lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px] text-white md:w-[400px] w-[225px] bg-black md:px-6 md:py-4 px-4 py-3 rounded-full" />

                        <input type="password" placeholder="Password" ref={password} className="lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px] text-white md:w-[400px] w-[225px] bg-black md:px-6 md:py-4 px-4 py-3 rounded-full" />
                        <br />
                        <div className="md:flex items-end gap-5 w-screen">
                            <button className="bg-white text-black border-1 border-black border md:px-7 md:py-3 px-4 py-2 rounded-full cursor-pointer lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px] mb-[10px] md:mb-0" onClick={loginHandler}>
                                Login
                            </button>
                            <br />
                            <Link to="/" className="underline text-[#0000ff] ml-[50px] md:ml-0 text-lg">Don't have an account</Link>
                        </div>
                        <p className={check ? 'lg:mt-[25px] md:mt-0 mt-[25px] lg:ml-[270px] md:ml-[75px] ml-[40px] text-xl transform animate-pulse transition-all text-[#8b4513] font-bold' : 'hidden'}>Fill all the fields</p>
                    </div>
                    <div className="hidden md:block">
                        <img src={login} className="md:w-[300px] md:ml-[50px] md:h-[225px] lg:w-[500px] lg:h-[400px]" alt="Login img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
