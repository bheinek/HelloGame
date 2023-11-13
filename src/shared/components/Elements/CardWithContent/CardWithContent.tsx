import { Link } from "react-router-dom";
import { Card } from "../_index";

type Props = {
  title: string;
  image?: string;
  description?: string;
  link?: string;
};

export const CardWithContent = ({ title, image, description, link }: Props) => {
  const imageAlt = `${title} image`;

  const cardContent = (
    <Card>
      {image && (
        <img className="h-4/5 w-full object-cover" src={image} alt={imageAlt} />
      )}
      <h1 className="mt-2">{title}</h1>
      {description && <p>{description}</p>}
    </Card>
  );

  return link ? <Link to={link}> {cardContent} </Link> : cardContent;
};
