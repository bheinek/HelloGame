import { Card, Typography } from "@/shared/components/_index";

type Props = {
  title: string;
  image?: string;
  description?: string;
  link?: string;
};

export const CardWithContent = ({ title, image, description, link }: Props) => {
  const imageAlt = `${title} image`;

  return (
    <Card link={link}>
      {image && (
        <img className="h-4/5 w-full object-cover" src={image} alt={imageAlt} />
      )}
      <Typography level="h1" className="mt-2">
        {title}
      </Typography>
      {description && <Typography>{description}</Typography>}
    </Card>
  );
};
