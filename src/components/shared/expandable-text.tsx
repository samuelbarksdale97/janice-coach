'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type ExpandableTextProps = {
  text: string;
  truncateAt?: number;
};

export function ExpandableText({ text, truncateAt = 350 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // This regex splits the text by one or more newline characters
  const paragraphsRaw = text.split(/\n+/);

  const fullTextContent = paragraphsRaw.map((p, i) => (
    <p key={i} className={i < paragraphsRaw.length - 1 ? "mb-4" : ""}>
        {p.trim()}
    </p>
  ));

  if (text.length <= truncateAt) {
    return <div className="whitespace-pre-wrap italic text-muted-foreground text-left">{fullTextContent}</div>;
  }
  
  const truncatedText = `${text.substring(0, text.lastIndexOf(' ', truncateAt))}...`;
  const truncatedTextContent = <p>{truncatedText}</p>;


  return (
    <div>
      <div className="italic text-muted-foreground text-left">
        {isExpanded ? fullTextContent : truncatedTextContent}
      </div>
      <Button
        variant="link"
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-0 text-secondary hover:text-secondary/80 font-bold"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  );
}
