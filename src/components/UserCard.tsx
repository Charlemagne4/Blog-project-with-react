import { SiToyota } from 'react-icons/si';
import { CarManufacturer } from '../Types/types';
import { CgCheck } from 'react-icons/cg';
import { FaCircleCheck } from 'react-icons/fa6';
type UserCardProps = {
  car: CarManufacturer;
};
function UserCard({ car: { name, following, icon } }: UserCardProps) {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center gap-x-3">
        <div className="text-xl">{icon}</div>
        <div>{name}</div>
        {following ? (
          <FaCircleCheck />
        ) : (
          <button className="cursor-pointer rounded-lg p-0.5 px-2 text-sm outline hover:bg-white hover:text-black">
            Follow
          </button>
        )}
      </section>
    </div>
  );
}
export default UserCard;
