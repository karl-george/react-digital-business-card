import '../Info.css';

const Info = () => {
  return (
    <header className='card'>
      <img
        src='https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg'
        alt='Picture of a dog'
        className='header-img'
      />
      <div className='header-content'>
        <h1>Karl George</h1>
        <h3>Frontend Developer</h3>
        <p>karlgeorge.website</p>
        <button>Email</button>
      </div>
    </header>
  );
};

export default Info;
