// "use client";
// import React, { useMemo, useState } from "react";
// import TrainerCard from "@/src/components/TrainerCard";
// import { trainingSessions } from "@/src/components/ListingData";
// // import { Session } from "@/src/components/ListingData";
// import { FaSearch } from "react-icons/fa";
// import Breadcrumb from "@/src/components/Breadcrumb";

// type SortOption = "default" | "session" | "name";

// const Gymnast = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortBy, setSortBy] = useState<SortOption>("default");

//   const filteredTrainers = useMemo(() => {
//     const filtered = trainingSessions.filter(
//       (trainer) =>
//         trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         trainer.session.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     switch (sortBy) {
//       case "name":
//         filtered.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "session":
//         filtered.sort((a, b) => a.session.localeCompare(b.session));
//         break;
//       case "default":
//       default:
//         break;
//     }

//     return filtered;
//   }, [searchQuery, sortBy]);

//   return (
//     <div className=" px-16 py-22">
//       <div className="my-15">
//         <Breadcrumb
//           items={[{ label: "Home", href: "/" }, { label: "training-session" }]}
//         />
//       </div>
//       <h3 className="font-[MainluxBold] font-regular text-[32px] leading-[110%] tracking-normal mb-2">
//         Find Your Perfect Trainer
//       </h3>
//       <p className="font-[Kumbh] text-[16px] leading-[110%] tracking-normal font-regular mb-6">
//         Choose from verified experts specialized in cardio, mobility, strength,
//         and more.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="relative">
//           <FaSearch
//             size={20}
//             color="#BBBBBB"
//             className="absolute left-2.5 top-2.5"
//           />
//           <input
//             type="text"
//             id="search"
//             placeholder="search by name  or specialities"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="border border-[#E7E4E4] rounded-lg pl-10 py-3 font-[Kumbh] font-regular text-[16px] leading-[110%] tracking-normal text-[#B2B2B2] lg:w-[530px] w-full outline-0"
//           />
//         </div>

//         <div className="flex items-center justify-end mb-6">
//           <select
//             id="sort"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value as SortOption)}
//             className="border border-[#989797] px-3 py-2 rounded-lg font-[Kumbh] font-regular text-[16px] leading-[110%] tracking-normal outline-0"
//           >
//             <option value="default">Default</option>
//             <option value="session">Session</option>
//             <option value="name">Name</option>
//           </select>
//         </div>
//       </div>
//       <div className="grid border border-[red] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredTrainers.map((trainer) => (
//           <TrainerCard key={trainer.id} trainer={trainer} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gymnast;

"use client";
import React, { useMemo, useState } from "react";
import TrainerCard from "@/src/components/TrainerCard";
import { trainingSessions } from "@/src/components/ListingData";
import { FaSearch } from "react-icons/fa";
import Breadcrumb from "@/src/components/Breadcrumb";

type SortOption = "default" | "session" | "name";

const Gymnast = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const filteredTrainers = useMemo(() => {
    const filtered = trainingSessions.filter(
      (trainer) =>
        trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trainer.session.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "session":
        filtered.sort((a, b) => a.session.localeCompare(b.session));
        break;
      case "default":
      default:
        break;
    }

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 md:py-22">
      <div className="my-8 md:my-15">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "training-session" }]}
        />
      </div>
      <h3 className="font-[MainluxBold] font-regular text-[24px] md:text-[32px] leading-[110%] tracking-normal mb-2">
        Find Your Perfect Trainer
      </h3>
      <p className="font-[Kumbh] text-[14px] md:text-[16px] leading-[110%] tracking-normal font-regular mb-6">
        Choose from verified experts specialized in cardio, mobility, strength,
        and more.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <FaSearch
            size={20}
            color="#BBBBBB"
            className="absolute left-2.5 top-2.5"
          />
          <input
            type="text"
            id="search"
            placeholder="search by name  or specialities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-[#E7E4E4] rounded-lg pl-10 py-3 font-[Kumbh] font-regular text-[14px] md:text-[16px] leading-[110%] tracking-normal text-[#B2B2B2] w-full outline-0"
          />
        </div>

        <div className="flex items-center justify-start md:justify-end">
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-[#989797] px-3 py-2 rounded-lg font-[Kumbh] font-regular text-[14px] md:text-[16px] leading-[110%] tracking-normal outline-0 w-full md:w-auto"
          >
            <option value="default">Default</option>
            <option value="session">Session</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredTrainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default Gymnast;
