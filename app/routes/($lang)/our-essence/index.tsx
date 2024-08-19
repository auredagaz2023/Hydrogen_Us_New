import {keyframes} from '@emotion/react';
import {
  Banner,
  PageNav,
  History,
  Agency,
  Environment,
  Sport,
} from '~/components/our-essence';
import WorldMap from '~/components/worldmap';

const keyframe = keyframes`
  from {
    opacity: 0;
    transform: translate3D(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3D(0, 0, 0);
  }
`;

export default function OurEssence() {
  return (
    <>
      <Banner />
      <PageNav />
      <History keyframe={keyframe} />
      <Agency keyframe={keyframe} />
      <Environment keyframe={keyframe} />
      <Sport keyframe={keyframe} />
      <WorldMap keyframe={keyframe} />
    </>
  );
}
