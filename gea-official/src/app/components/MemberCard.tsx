interface MemberCardProps {
  urlMemberImg: string;
  memberName: string;
  descriptionMember: string;
}

export default function MemberCard({
  urlMemberImg,
  memberName,
  descriptionMember,
}: MemberCardProps) {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto bg-neutral-900 text-gray-100 rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
      {/* Imagen */}
      <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden relative">
        <img
          src={urlMemberImg}
          alt={memberName}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
          {memberName}
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
          {descriptionMember}
        </p>
      </div>
    </div>
  );
}
