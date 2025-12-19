
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type ExpandableTextProps = {
  text: string;
  truncateAt?: number;
};

export function ExpandableText({ text, truncateAt = 350 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphsRaw = text.split(/\n\s*\n/);

  const fullTextContent = paragraphsRaw.map((p, i) => (
    <p key={i} className={i < paragraphsRaw.length - 1 ? "mb-4" : ""}>
        {p.trim()}
    </p>
  ));
  
  if (text.length <= truncateAt) {
    return <blockquote className="italic text-muted-foreground text-center">"{fullTextContent}"</blockquote>;
  }
  
  const truncatedText = `"${text.substring(0, text.lastIndexOf(' ', truncateAt))}..."`;


  return (
    <div>
      <blockquote className="italic text-muted-foreground text-center">
        {isExpanded ? <span>"{fullTextContent}"</span> : truncatedText}
      </blockquote>
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
