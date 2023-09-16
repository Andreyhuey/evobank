import { AiFillStar } from "react-icons/ai";

interface IconRendererProps {
  numberOfIcons: number;
}

const IconRenderer: React.FC<IconRendererProps> = ({ numberOfIcons }) => {
  return (
    <div className="flex">
      {Array.from({ length: numberOfIcons }, (_, index) => (
        <AiFillStar key={index} className="text-[#F5A647]" />
      ))}
    </div>
  );
};

interface Prop {
  index: number;
  item: {
    id: number;
    name: string;
    displayPicture: string;
    story: string;
    stars: number;
  };
}

const Stories = ({ item }: Prop) => {
  const { id, name, displayPicture, story, stars } = item;

  return (
    <div
      className="rounded-3xl p-6 flex flex-col gap-4 min-w-[300px] min-h-[250px] shadow-xl relative hover:bg-[#0F0901] hover:text-white transition duration-300 ease-in-out  cursor-pointer"
      key={id}
    >
      <div>
        <IconRenderer numberOfIcons={stars} />
      </div>
      <p>"{story}"</p>
      <div className="flex gap-3 items-center absolute bottom-3">
        <img
          src={displayPicture}
          alt={`image of ${name} `}
          className="h-[40px] w-[40px]"
        />
        <p className="h4">{name}</p>
      </div>
    </div>
  );
};

export default Stories;
