import Image from 'next/image';
import Hammer from 'hammerjs';
import {useEffect, useRef, useState} from 'react';
import {useGesture, usePinch} from 'react-use-gesture';

export default function HammerComponent() {
  const imageRef = useRef(null);
  const [crop, setCrop] = useState({x: 0, y: 0});

  useGesture(
    {
      onDrag: ({offset: [dx, dy]}) => {
        setCrop({x: dx, y: dy});
      },
    },
    {
      domTarget: imageRef,
    }
  );

  // test2
  // useEffect(() => {
  //   const target = document.getElementById('target');
  //   if (target === null) return;

  //   const hammertime = new Hammer(target);
  //   hammertime.get('pinch').set({enable: true});

  //   hammertime.on('pinch', function (ev) {
  //     console.log(ev);
  //   });
  // }, []);

  console.log('rendering');

  return (
    <div style={{padding: '2rem'}}>
      <div
        style={{
          width: '200px',
          height: '300px',
          overflow: 'hidden',
          border: '3px solid blue',
        }}
      >
        <div>
          <img
            ref={imageRef}
            style={{
              position: 'relative',
              top: crop.y,
              left: crop.x,
              maxWidth: 'none',
              maxHeight: 'none',
              height: '100%',
              width: 'auto',
            }}
            src='https://s.marketwatch.com/public/resources/images/MW-BZ111_cute_b_MG_20140411074006.jpg'
            alt='test'
          />
        </div>
        {/* <Image
          width={700}
          height={475}
          src='https://s.marketwatch.com/public/resources/images/MW-BZ111_cute_b_MG_20140411074006.jpg'
          alt='baby'
          layout='intrinsic'
        /> */}
      </div>
    </div>
  );
}
