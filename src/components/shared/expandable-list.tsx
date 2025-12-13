'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

type ExpandableListProps = {
  items: string[];
  truncateAt?: number;
};

export function ExpandableList({ items, truncateAt = 3 }: ExpandableListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (items.length <= truncateAt) {
    return (
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                </li>
            ))}
        </ul>
    );
  }

  const visibleItems = isExpanded ? items : items.slice(0, truncateAt);

  return (
    <div>
        <ul className="space-y-2">
            {visibleItems.map((item, i) => (
                <li key_={i} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                </li>
            ))}
        </ul>
        <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0 text-secondary hover:text-secondary/80 font-bold text-sm h-auto mt-2"
        >
            {isExpanded ? 'Show Less' : `Show All ${items.length} Features...`}
        </Button>
    </div>
  );
}
