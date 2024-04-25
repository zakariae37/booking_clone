import GlobalSearchBar from "@/components/search/GlobalSearchBar";
import CityFilter from "@/components/shared/CityFilter";
import HomeFilters from "@/components/shared/HomeFilters";
import Offer from "@/components/shared/Offer";
import NotFound from "@/components/shared/NotFound";
import { getServices } from "@/lib/actions/service.action";
import ServiceCard from "@/components/cards/ServiceCard";
import Pagination from "@/components/shared/Pagination";
import { SearchParamsProps } from "@/types";
import Cities from "@/components/shared/Cities";


export default async function Home({ searchParams }: SearchParamsProps) {
  const result = await getServices({
    page: searchParams.page ? +searchParams.page : 1,
  });


  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-12">
        <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Find your next stay
        </h1>
        <p className="text-lg text-white md:text-xl lg:text-2xl">
          Search low prices on hotels, homes and much more...
        </p>
        <GlobalSearchBar route="/" placeholder="Where are you going ?" />
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
          Offers
        </h1>
        <p className="text-sm text-white md:text-base lg:text-lg">
          Promotions, deals and special offers for you
        </p>
        <Offer />
      </div>
      <div className="mt-8">
        <HomeFilters />
      </div>
      <div className="mt-8">
       
       
       
      </div>
      <div className="mt-8">
      <CityFilter />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {result && result.services.length > 0 ? (
          result.services.map((service) => (
            <ServiceCard
              key={service._id}
              _id={service._id}
              title={service.title}
              price={service.price}
              image={service.image}
              category={service.category}
              location={service.location}
              views={service.views}
            />
          ))
        ) : (
          <NotFound link="/create-service" linkTitle="Create an annonce" />
        )}
      </div>
      <div className="my-6">
        <Pagination
          pageNumber={searchParams.page ? +searchParams.page : 1}
          isNext={result?.isNext}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
        <Cities />
      </div>
    </div>
  );
}
