
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder({url}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  console.log(url);

  return (
    // Important! Alwys set the container height explicitlya

    <img src={url} alt="" />
  );
}
