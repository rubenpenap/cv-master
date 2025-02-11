import * as React from 'react';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Item, language } from '@/data/data';

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
}) => {
	const { name, location, title, startDate, endDate, activities, id } = item;
	return (
		<div className={'mb-2'}>
			<div
				className={cn(`grid grid-cols-2 place-content-between mb-2`, className)}
				{...props}
			>
				{name && <h3 className='text-lg font-bold leading-6'>{name}</h3>}
				{location && (
					<h3 className='text-base leading-6 text-right'>{location}</h3>
				)}
				<p className='text-lg font-semibold italic text-theme leading-6 inline-flex items-center gap-2'>
					{education ? (
						<GraduationCap size={13} />
					) : (
						<BriefcaseBusiness size={13} />
					)}
					{title}
				</p>
				<p className='text-base italic leading-6 text-right text-theme'>
					{startDate
						? `${startDate} - ${endDate}`
						: `${language ? 'Graduated in:' : 'Titulado en:'} ${endDate}`}
				</p>
			</div>
			<ul>
				{activities?.map((activity, index) => (
					<li
						key={`${id}-${index}`}
						className='text-base list-disc list-inside'
					>
						{activity}
					</li>
				))}
			</ul>
		</div>
	);
};

SectionItem.displayName = 'SectionItem';

export { SectionItem };
