import * as React from 'react';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Item } from '@/data/data';

interface SectionItemProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	item: Item;
	education: boolean;
}

const SectionItem: React.FC<SectionItemProps> = ({
	className,
	item,
	education,
	...props
}) => (
	<div className={'mb-2'}>
		<div
			className={cn(`grid grid-cols-2 place-content-between mb-2`, className)}
			{...props}
		>
			{item.name && (
				<h3 className='text-lg font-bold leading-6'>{item.name}</h3>
			)}
			{item.location && (
				<h3 className='text-base leading-6 text-right'>{item.location}</h3>
			)}
			<p className='text-lg font-semibold italic text-green-600 leading-6 inline-flex items-center gap-2'>
				{education ? (
					<GraduationCap size={13} />
				) : (
					<BriefcaseBusiness size={13} />
				)}
				{item.title}
			</p>
			<p className='text-base italic leading-6 text-right text-green-600'>
				{item.startDate
					? `${item.startDate} - ${item.endDate}`
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
