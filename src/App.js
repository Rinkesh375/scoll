import logo from './logo.svg';
import './App.css';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  
];

function App() {
  return (
<div className="App">
      <div className="ImageGallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="GalleryImage"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
