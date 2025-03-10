import {
  SiAudi,
  SiBmw,
  SiFerrari,
  SiHonda,
  SiLamborghini,
  SiMazda,
  SiMercedes,
  SiPorsche,
  SiSubaru,
  SiToyota
} from 'react-icons/si';
import { CarManufacturer } from '../Types/types';
import UserCard from './UserCard';

const carManufacturers: CarManufacturer[] = [
  { name: 'Toyota', following: true, icon: <SiToyota /> },
  { name: 'Porsche', following: true, icon: <SiPorsche /> },
  { name: 'Ferrari', following: true, icon: <SiFerrari /> },
  { name: 'Lamborghini', following: false, icon: <SiLamborghini /> },
  { name: 'BMW', following: true, icon: <SiBmw /> },
  { name: 'Mercedes-Benz', following: false, icon: <SiMercedes /> },
  { name: 'Audi', following: false, icon: <SiAudi /> },
  { name: 'Honda', following: true, icon: <SiHonda /> },
  { name: 'Subaru', following: true, icon: <SiSubaru /> },
  { name: 'Mazda', following: true, icon: <SiMazda /> }
];

function PeopleToFollow() {
  return (
    <div className="top-0 h-full w-auto rounded-lg p-4 shadow">
      <h3 className="mb-4 text-lg leading-none font-semibold">Must Follow</h3>
      <div className="flex flex-col gap-y-4">
        {carManufacturers.map((car: CarManufacturer, index) => {
          return <UserCard car={car} key={index} />;
        })}
      </div>
    </div>
  );
}
export default PeopleToFollow;
