import {Link, useNavigate} from 'react-router-dom';
import playIcon from '/play.png';
import pauseIcon from '/pause.png';

const Header = ({signIn, isLoggedIn, musicPlayer, isPlaying}) => {
  // const navigate = useNavigate();

  // const toAlbum = () => {
  //   navigate()
  // }
  
  return (
    <div className="font-['Noto_Serif_JP'] absolute top-0 left-0 w-full z-20 text-white flex flex-row lg:p-16 p-12 justify-between items-center">
      <Link to="/"><h2 className="text-xl cursor-pointer">JP.</h2></Link>
      <ul className="list-none flex flex-row gap-8 items-center">
        <li onClick={musicPlayer} className="cursor-pointer">
          <img 
            src={isPlaying ? pauseIcon : playIcon}
            alt="music player"
            className="w-[20px] transition-all"/>
        </li>
        {
        //!isLoggedIn ? <li onClick={signIn} className="cursor-pointer">Sign In</li> : <li className="cursor-pointer">Welcome.</li>
        } 
      </ul>
    </div>
  )
}

export default Header;