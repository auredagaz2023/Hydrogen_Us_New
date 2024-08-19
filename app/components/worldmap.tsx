import {Link} from './Link';
const WorldMap = (props: {keyframe: string}) => {
  return (
    <section className="bg-[url('../assets/world-map.jpg')] bg-center bg-no-repeat h-banner max-h-banner min-h-banner">
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28 h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gold uppercase py-5 mb-4">STORES</p>
            <p className="pb-8 text-subheading lg:text-4xl text-dark-blue font-bold mb-2">
              Find the store near you
            </p>
            <Link
              to="/store-locator"
              className="border border-dark-blue text-dark-blue uppercase px-4 py-2 mt-6"
            >
              STORE LOCATOR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
