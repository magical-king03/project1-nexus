import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import register from "../img/register.png"
function Signup() {
    let user_name = useRef();
    let navigate = useNavigate()
    let password = useRef();
    let email = useRef();
    const [check, setCheck] = useState(false)
    function registerHandler() {
        let name = user_name.current.value
        let pass = password.current.value
        let em = email.current.value
        if (name === '' || pass === '' || em === '') {
            setCheck(true);
            setTimeout(() => {
                setCheck(false);
            }, 3000);
        } else {
            setCheck(false);
            navigate('/login')
        }

    }
    return (
        <div>
            <div>
                <h1 className="mt-[20px] lg:mt-[50px] text-xl md:text-2xl p-2 text-black lg:ml-[250px] md:ml-[75px] ml-[40px]">REGISTER NOW FOR FREE</h1>
                <div className="grid grid-cols-2">
                    <div>
                        <input type="name" placeholder="Name" ref={user_name} className="lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px] text-white lg:w-[400px] w-[225px] bg-black px-6 py-2 lg:py-3 rounded-full" />

                        <input type="name" placeholder="Email" ref={email} className="lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px] text-white lg:w-[400px] w-[225px] bg-black px-6 py-2 lg:py-3 rounded-full" />

                        <input type="password" placeholder="Password" ref={password} className="lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px] text-white lg:w-[400px] w-[225px] bg-black px-6 py-2 lg:py-3 rounded-full" />
                        <br />
                        <div className="flex items-end gap-5 w-screen">
                            <button className="bg-white text-black border-1 border-black border md:px-7 md:py-3 px-4 py-2 rounded-full cursor-pointer lg:ml-[270px] mt-[15px] md:ml-[75px] ml-[40px]" onClick={registerHandler}>
                                REGISTER
                            </button>
                        </div>
                        <p className={check ? 'lg:mt-[25px] md:mt-0 mt-[25px] lg:ml-[270px] md:ml-[75px] ml-[40px] text-xl transform animate-pulse transition-all text-[#8b4513] font-bold' : 'hidden'}>Fill all the fields</p>
                    </div>
                    <div className="hidden md:block">
                        <img src={register} className="w-[300px] h-[250px] lg:w-[500px] lg:h-[400px]" alt="Register img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup