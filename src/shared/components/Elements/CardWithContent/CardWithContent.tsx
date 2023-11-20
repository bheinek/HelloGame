import { Card, Typography } from "@/shared/components/_index";
import { cx } from "@/shared/utils/classNames";

type Props = {
  title: string;
  image?: string;
  description?: string;
  link?: string;
  cardClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

export const CardWithContent = ({
  title,
  image,
  description,
  link,
  cardClassName,
  headingClassName,
  descriptionClassName,
}: Props) => {
  const imageAlt = `${title} image`;

  return (
    <Card link={link} className={cx("max-w-sm", cardClassName)}>
      {image && (
        <img className="h-4/5 w-full object-cover" src={image} alt={imageAlt} />
      )}
      <Typography
        variant="h3"
        as="h1"
        className={cx(undefined, headingClassName)}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="p"
          as="p"
          className={cx(undefined, descriptionClassName)}
        >
          {description}
        </Typography>
      )}
    </Card>
  );
};
