import * as React from 'react';
import { cn } from '@/lib/utils';
import {} from '@/components/ui/';
import { Item } from '@/data/data';

interface SectionItemProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	item: Item;
}

const SectionItem: React.FC<SectionItemProps> = ({
	className,
	item,
	...props
}) => (
	<div className={'mb-2'}>
		<div
			className={cn(`grid grid-cols-2 place-content-between mb-2`, className)}
			{...props}
		>
			<h3 className='text-lg font-bold leading-6'>{item.name}</h3>
			<h3 className='text-lg font-bold leading-6 text-right'>
				{item.location}
			</h3>
			<p className='text-lg italic leading-6'>{item.title}</p>
			<p className='text-lg italic leading-6 text-right'>
				{item.startDate
					? `${item.startDate}- ${item.endDate}`
					: `Titulado en: ${item.endDate}`}
			</p>
		</div>
		<ul>
			{item.activities?.map((activity) => (
				<li key={item.id} className='text-base list-disc list-inside'>
					{activity}
				</li>
			))}
		</ul>
	</div>
);

SectionItem.displayName = 'SectionItem';

export { SectionItem };
