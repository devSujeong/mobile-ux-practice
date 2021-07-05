import HammerComponent from 'components/HammerComponent';
import dynamic from 'next/dynamic';
// const HammerComponentDynamic = dynamic(
//   // () => import('components/HammerComponent').then((mod) => mod.HammerComponent),
//   () => import('components/HammerComponent'),
//   {
//     ssr: false,
//   }
// );

export default function Home() {
  return (
    <div>
      {/* <HammerComponentDynamic /> */}
      <HammerComponent />
    </div>
  );
}
