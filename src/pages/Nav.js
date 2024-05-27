import { Link} from "react-router-dom"
function Nav() {
    return (
        <div>
            <div className='h-full flex w-full'>
                <div className="flex items-center justify-between w-full lg:mt-[150px] lg:ml-[250px] lg:mr-[250px] md:mt-[100px] md:mr-[75px] md:ml-[75px] mt-[150px] ml-[50px] mr-[50px]">
                    <div className="flex items-center">
                        <Link to="/"><p className="font-bold md:text-4xl text-2xl">Nexus Info</p></Link>
                    </div>
                    <div>
                        <div className="">
                            <Link to='/login' className="bg-black text-white md:p-3 p-2 rounded-lg md:font-bold cursor-pointer md:text-xl text-xs">Login</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav