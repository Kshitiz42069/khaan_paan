
import LogoutIcon from '@mui/icons-material/Logout';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';


const Navbar = () => {
  return (
    <div className=" bg-black text-white py-[1rem]">
        <div className="flex items-center justify-between px-[2rem]">
            {/* <img className='h-[4rem] mt-2 rounded-xl' src={logo} alt="logo" /> */}
            <a href="/"><p className='text-5xl underline underline-offset-8 DS'>Recipes</p></a>

            {/* pages */}
            <div className='flex gap-[2rem] text-xl'>
                <a href="/"><p>Home</p></a>
                <a href="/explore"><p>Explore</p></a>
            </div>

            {/* auth */}
            {/* if not login */}
            <div className='flex gap-[2rem]'>
                <a href="/login"><button className='login-button w-[5rem]'>Login</button></a>
                <a href="/signup"><button className='signup-button w-[5rem]'>Sign Up</button></a>
            </div>

            {/* changes to be done */}
            {/* if login */}
            <div className='flex gap-[2rem] lg:hidden'>
                <button className='login-button flex'><LoyaltyOutlinedIcon/> Wishlist</button>
                <button className='signup-button flex'><LogoutIcon/> LogOut</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar