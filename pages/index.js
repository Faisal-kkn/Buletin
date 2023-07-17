import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Header from '../components/Header';

const navItems = [
  { href: '/', label: 'Stories' },
  { href: '/popular', label: 'Creator' },
  { href: '/top-rated', label: 'Community' },
  { href: '/upcoming', label: 'Subscribe' },
];

const HomePage = () => {

  const [news, setNews] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      try {
        const upcomingResponse = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-07-16&to=2023-07-16&sortBy=popularity&apiKey=${API_KEY}`);
        const upcomingData = await upcomingResponse.json();
        setNews(upcomingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }, []);

  console.log(news);

  return (
    <div>
      <Header logoText="Buletin" navItems={navItems} />
      <div className="max-w-screen-xl mx-auto p-2 md:p-4 pt-0 gap-3">
        <div className='bg-gray-200 font-sans p-4 py-8 rounded-xl'>
          <h3 className='text-gray-600 text-center tracking-[5px] text-[13px] font-medium'>WELCOME TO BULETIN</h3>
          <h2 className='text-black text-center tracking-[1px]  font-bold mt-3 text-[20px]'>Craft narratives ✍️ that ignite <span className='text-red-600'>inspiration</span>💡, <br className='hidden md:block' /> <span className='text-red-600'>knowledge</span> 📚, and <span className='text-red-600'>entertainment</span>🎬</h2>
        </div>
        <div className="border-1 border-white text-white flex-1 py-4">
          <div className="md:flex gap-10 items-center">
            <div className='w-full md:w-1/2 overflow-hidden rounded-xl'>
              <img src="https://images.ctfassets.net/4mws6uyas4ta/attRifu8hdU3XQQzs/21dd0adb3f4e9b62160ce70a0e2e4e5d/John_Wick__Chapter_4_-_1.jpg" alt="" />
            </div>
            <div className='w-full md:w-1/2 '>
              <TimeAgo img={'https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png'} title={'Netflixxx'} ago={2} />
              <h2 className='text-gray-900 font-serif text-[40px] mt-2 font-medium'>
                Where To Watch ‘John <br />
                Wick: Chapter 4&apos;
              </h2>
              <p className='text-black font-sans text-[18px] mt-2 font-normal'>There&apos;s been no official announcement regarding John Wick:
                Chapter 4&apos;s streaming release. However, given it&apos;s a Lionsgate
                film, John Wick: Chapter 4 will eventually be released on Starz,...</p>

              <h6 className="text-base font-normal flex items-center text-red-600 font-sans mt-3">
                Movies <span className="text-gray-700  ml-3 text-[13px]"> 4 min read</span>
              </h6>

            </div>

          </div>
          <div className="flex items-center justify-between mt-8 text-black">
            <h1 className="text-2xl font-medium font-sans">Latest News</h1>
            <h1 className="text-base font-medium flex items-center text-red-600 font-sans">
              See all <FaArrowRight className="ml-2 w-5 h-5" />
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {Array.isArray(news?.articles) &&
              news?.articles.map((movie) => (
                <SingleNews
                  img={`url(${movie?.urlToImage})`}
                  title={movie.content}
                  ago={movie.publishedAt}
                  key={movie.urlToImage}
                />
              ))}
          </div>
        </div>
      </div>
    </div>

  );
};


const SingleNews = ({ img, title, ago }) => {
  return (
    <div className="w-full mb-5">
      <div className="w-full h-[300px] overflow-hidden rounded-xl  " style={{ backgroundImage: img, backgroundSize: 'container', backgroundPosition: 'center -19px' }}></div>
      <TimeAgo img={'https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png'} title={'Netflix'} ago={ago?.slice(0, 10)} />
      <h1 className='text-black text-[20px] font-medium font-serif mt-1 line-clamp-2'>{title}</h1>
    </div>
  );
};

const TimeAgo = ({ img, ago, title }) => {
  return (
    <div className='text-gray-700 flex gap-2 items-center mt-3'>
      <img src={img} alt="" className='w-7' />
      {title} <span className='text-[12px] ml-3'>{ago}</span>
    </div>
  );
};

export default HomePage;
