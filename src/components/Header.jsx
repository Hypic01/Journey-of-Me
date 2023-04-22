import {Link, useNavigate} from 'react-router-dom';

const Header = ({signIn, isLoggedIn}) => {
  // const navigate = useNavigate();

  // const toAlbum = () => {
  //   navigate()
  // }
  
  return (
    <div className="font-['Noto_Serif_JP'] absolute top-0 left-0 w-full z-10 text-white flex flex-row lg:p-16 p-12 justify-between items-center">
      <Link to="/"><h2 className="text-xl cursor-pointer">JP.</h2></Link>
      <ul className="list-none flex flex-row gap-8">
        <li className="cursor-pointer">Explore</li>
        <Link to="/album"><li className="cursor-pointer">Album</li></Link>
        {!isLoggedIn ? <li onClick={signIn} className="cursor-pointer">Sign In</li> : <li className="cursor-pointer">Welcome.</li>}
      </ul>
    </div>
  )
}

export default Header;