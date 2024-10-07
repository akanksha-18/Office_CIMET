const Hero = () => {
  return (
    <div className='bg-gray-500 flex items-center justify-center min-h-screen p-4'>
      <div className='flex'>
        <input 
          type="text" 
          placeholder="Search..." 
          className='p-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 h-12' // Adjusted padding and corner radius
        />
        <button 
          className='bg-blue-500 text-white p-4 rounded-r-full h-12 hover:bg-blue-600 transition duration-200 flex items-center justify-center'
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
