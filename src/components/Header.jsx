const Header = () => {
  return (
    <div className="font-['Noto_Serif_JP'] absolute top-0 left-0 w-full z-10 text-white flex flex-row lg:p-16 p-12 justify-between items-center">
      <h2 className="text-xl cursor-pointer">JP.</h2>
      <ul className="list-none flex flex-row gap-8">
        <li className="cursor-pointer">Explore</li>
        <li className="cursor-pointer">Album</li>
      </ul>
    </div>
  )
}

export default Header;