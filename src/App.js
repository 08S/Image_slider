import Rating from './components/Rating'
import './App.css';
import ImageSlider from './SliderComponent/ImageSlider';

function App() {

  const slides = [
    {url: "http://localhost:3000/img/image-1.jpg", title: "Beach"},
    {url: "http://localhost:3000/img/image-2.jpg", title: "Boat"},
    {url: "http://localhost:3000/img/image-3.jpg", title: "Forest"},
    {url: "http://localhost:3000/img/image-4.jpg", title: "City"},
    {url: "http://localhost:3000/img/image-5.jpg", title: "Italy"},
  ]

  const containerStyles = {
    width: "800px",
    height: "480px",
    margin: "0 auto",
  }
  return (
    <div style={containerStyles}>
      {/* <Rating/> */}
      <ImageSlider slides={slides}/>
    </div>
  );
}

export default App;
