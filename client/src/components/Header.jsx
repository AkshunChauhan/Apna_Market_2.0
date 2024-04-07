import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import '../index.css';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-black-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl max-auto p-3 mx-auto"> {/* Added mx-auto to center align */}
        <Link to='/'>
        <h1 className="font-bold text-xl sm:text-2xl text-gray-900 flex flex-wrap">
  <span className="text-blue-500">Apna</span>
  <span className="text-blue-700">Market</span>
</h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-900 p-3 rounded-lg flex items-center'
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-white' />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to='/'>
            <li className="hidden sm:inline text-blue-500 hover:underline">
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className="hidden sm:inline text-blue-500 hover:underline">
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-blue-700 hover:underline'> Sign in</li>
            )}
          </Link>
          
        </ul>
      </div>
    </header>
  );
}
