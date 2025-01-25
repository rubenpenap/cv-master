import * as React from 'react';
import { SectionTitle, SectionItem } from '@/components/ui/';
import { cn } from '@/lib/utils';
import { ResumeSections } from '@/data/data';

interface SectionProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	title: string;
	items: ResumeSections;
}

const hasId = (item: unknown): item is { id: string } => {
	return typeof item === 'object' && item !== null && 'id' in item;
};

const Section: React.FC<SectionProps> = ({
	className,
	title,
	items,
	...props
}) => (
	<section
		className={cn(`scroll-m-20 tracking-tight mb-4`, className)}
		{...props}
	>
		<SectionTitle title={title} />
		{items.length > 0 && hasId(items[0]) ? (
			items.map((item) =>
				hasId(item) ? <SectionItem key={item.id} item={item} /> : null,
			)
		) : (
			<p className='text-base'>
				{items.map((item, index) => {
					const itemText = !hasId(item) ? item : null;
					return items.length - 1 === index ? `${itemText}` : `${itemText} | `;
				})}
			</p>
		)}
	</section>
);

Section.displayName = 'Section';

export { Section };
