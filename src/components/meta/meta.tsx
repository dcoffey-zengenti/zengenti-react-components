// features
import { Helmet } from "react-helmet";

export type MetaProps = {
  title: string;
  description?: string;
  siteName: string;
  path: string;
  image: string;
};

export function Meta({ title, description, siteName, path, image }: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {siteName && <meta name="og:site_name" content={siteName} />}
      <meta name="og:title" content={title} />
      {description && <meta name="og:description" content={description} />}
      <meta name="og:url" content={path} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      {siteName && <meta name="twitter:site" content={siteName} />}
      {siteName && <meta name="twitter:creator" content={siteName} />}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:url" content={path} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
