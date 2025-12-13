'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type ExpandableTextProps = {
  text: string;
  truncateAt?: number;
};

export function ExpandableText({ text, truncateAt = 350 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= truncateAt) {
    return <p className="whitespace-pre-wrap">{text}</p>;
  }

  const truncatedText = `${text.substring(0, text.lastIndexOf(' ', truncateAt))}...`;

  const paragraphs = (isExpanded ? text : truncatedText).split('”\n“').map((p, i, arr) => (
    <p key={i} className={i < arr.length -1 ? "mb-4" : ""}>
        {i > 0 && '“'}{p.startsWith('“') ? p : p}{!p.endsWith('”') && i < arr.length -1 && '”'}
    </p>
  ));


  return (
    <div>
      <div className="italic text-muted-foreground">
        {paragraphs}
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
