import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import '../index.css';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [shareListings, setShareListings] = useState([]);
  const [donateListings, setDonateListings] = useState([]);
  const [otherListings, setOtherListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
        fetchShareListings();
      } catch (error) {
        log(error);
      }
    };

    const fetchShareListings = async () => {
      try {
        const shareRes = await fetch('/api/listing/get?type=share&limit=4');
        const shareData = await shareRes.json();
        setShareListings(shareData);
        fetchDonateListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDonateListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=donate&limit=4');
        const data = await res.json();
        setDonateListings(data);
        fetchDonateListings();
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
}, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-300 font-bold text-3xl lg:text-6xl'>
        Discover your next <span className='text-blue-400'>essential</span>
          <br />
          item with simplicity
        </h1>
        <div className='text-gray-100 text-xs sm:text-sm'>
        Apna Market is a step towards sustainable development, 
          <br />
          promoting responsible consumption and maximizing the 
utility of resources within the student community.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-100'>Recent Resources offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
          {shareListings && shareListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-100'>Recent options to share Resources  </h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=share'}>Show more shares</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {shareListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
              </div>
          </div>
        )}
          {donateListings && donateListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-100'>Recent free and Donated Resources</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=donation'}>Show more donations</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {donateListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-100'>Recent Resources for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-100'>Recent Resources for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}