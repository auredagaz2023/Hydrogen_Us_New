import AnchorLink from 'react-anchor-link-smooth-scroll';

export function PageNav() {
  const navOffset = () => {
    if (window.innerWidth >= 1280) {
      return 181;
    } else {
      return 131;
    }
  };

  return (
    <div className="flex items-center justify-center bg-f7 py-2 md:py-4 sticky top-14 md:top-narrow-sticky xxl:top-wide-sticky z-40">
      <AnchorLink
        href="#history"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        HISTORY
      </AnchorLink>
      <AnchorLink
        href="#agency"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        NUMBERS
      </AnchorLink>
      <AnchorLink
        href="#environment"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        ENVIRONMENT
      </AnchorLink>
      <AnchorLink
        href="#sport"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        SPORT
      </AnchorLink>
    </div>
  );
}
