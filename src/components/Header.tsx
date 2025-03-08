const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-0 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1>
              <a href="">
                <img src="/img/logo_black.svg" alt="logo" />
              </a>
            </h1>
          </div>
          <div>
            <button>
              <img src="/img/menu_icon.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
