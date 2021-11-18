export type BlockQuoteProps = {
  cite: string;
  citeUrl?: string;
  quote: string;
  className?: string;
};

export function BlockQuote({
  cite,
  citeUrl,
  quote,
  className,
}: BlockQuoteProps) {
  if (!quote) return null;
  return (
    <figure className={[className, "block-quote"].join(" ")}>
      <blockquote cite={citeUrl} className="block-quote_text">
        {quote}
      </blockquote>
      {cite && (
        <figcaption className="block-quote--cite_wrapper">
          <cite className="block-quote--cite_text">{cite}</cite>
        </figcaption>
      )}
    </figure>
  );
}
