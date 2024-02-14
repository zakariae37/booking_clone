import GlobalSearchBar from "@/components/search/GlobalSearchBar";
import Offer from "@/components/shared/Offer";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-5xl font-extrabold text-white">
          Find your next stay
        </h1>
        <p className="text-xl text-white">
          Search low prices on hotels, homes and much more...
        </p>
      </div>
      <div className="mt-6">
        <GlobalSearchBar route="/" placeholder="Where are you going ?" />
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold">Offers</h1>
        <p className="text-sm">Promotions, deals and special offers for you</p>
        <Offer />
      </div>
    </div>
  );
}
