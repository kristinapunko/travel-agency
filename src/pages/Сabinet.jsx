import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTourById } from '../features/tours/toursSlice';
import { checkLoggedInUser } from '../features/authentication/logoutSlice';
import { fetchTourDetailsById } from '../features/tours/tourDetailsSlice';
import { fetchLikedTours, toggleLike, selectLikedTourIds } from '../features/сabinet/likedToursSlice';
import TourCard from '../components/ui/TourCard';
import { fetchReviews } from '../features/tours/reviewsSlice';
import Loading from '../components/ui/Loading';

const Cabinet = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false); 
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const tours = useSelector((state) => state.tours.tours);
  const tourDetails = useSelector((state) => state.tourDetails.tourDetails);
  const likedTourIds = useSelector(selectLikedTourIds);
  const loading = useSelector((state) => state.likedTours.loading);
  const error = useSelector((state) => state.likedTours.error);
 

  useEffect(() => {
    const loadData = async () => {
      if (!token) return;

      if (likedTourIds.length === 0) {
        await dispatch(fetchLikedTours()).unwrap();
      }

      for (const tourId of likedTourIds) {
        if (!tours[tourId]) { 
          await dispatch(fetchTourById(tourId)).unwrap();
        }
        if (!tourDetails[tourId]) {  
          await dispatch(fetchTourDetailsById(tourId)).unwrap();
          await dispatch(fetchReviews(tourId)).unwrap();
        }
      }

      setIsDataLoaded(true);  
     };
    loadData();
  }, [dispatch]); 

  const reviews = useSelector((state) => state.reviews.reviews);
  console.log("reviews",reviews);
  

  const handleToggleLike = (tourId, event) => {
    dispatch(toggleLike(tourId)).unwrap().catch((error) => {
      if (error.message.includes('401')) {
        localStorage.removeItem('accessToken');
        alert('Сесія закінчилася. Будь ласка, увійдіть знову.');
      } else {
        alert('Сталася помилка. Будь ласка, спробуйте ще раз.');
      }
    });
  };

  const getFullTourInfo = (tourId) => {
    const tour = tours.find((t) => t.id === tourId) || {};
    const details = tourDetails.find((d) => d.tour === tourId) || {};
    return { id: tourId, ...tour, ...details };
  };


  if (loading) return <Loading/>;
  if (!token) return (
    <div className="text-center py-8">
      <p className="text-lg mb-4">Будь ласка, увійдіть до системи</p>
      <Link to="/login" className="bg-[#543c52] text-white px-6 py-2 rounded-lg hover:bg-[#361d32] transition">
        Увійти
      </Link>
    </div>
  );
  if (error) return <Error /> ;
  if (!likedTourIds.length) return (
        <div className="flex mx-auto bg-[#f1e8e6] w-[80%] rounded-2xl items-center justify-center h-60 mb-4">
            <div className="text-[#543c52] text-2xl font-medium">
                У вас немає улюблених турів
            </div>
        </div>);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="capitalize text-[#361d32] text-xl lg:text-3xl font-semibold mb-6">Улюблені тури</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedTourIds.map((tourId) => {
          const fullTour = getFullTourInfo(tourId);
          return fullTour.id ? (
            <TourCard
              key={tourId}
              tour={{ ...fullTour, id: tourId }}
              details={fullTour}
              reviews={reviews}
              showLikeButton={true}
              onLikeClick={(e) => handleToggleLike(tourId, e)}
              isLiked={true}
              isLoggedIn={true}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Cabinet;