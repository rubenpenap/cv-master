import * as React from 'react';
import { SectionTitle, SectionItem } from '@/components/ui/';
import { cn } from '@/lib/utils';
import { ResumeSections, language } from '@/data/data';

interface SectionProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	title: string;
	items: ResumeSections;
}

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
		{!Array.isArray(items) ? (
			<>
				<p className='text-base mb-2'>
					<span className='font-bold'>
						{language ? 'Technical: ' : 'Técnicas: '}
					</span>
					{items.technical.map((skill, index) =>
						items.technical.length - 1 === index ? `${skill}` : `${skill} | `,
					)}
				</p>
				<p className='text-base mb-2'>
					<span className='font-bold'>{language ? 'Soft: ' : 'Blandas: '}</span>
					{items.softs.map((skill, index) =>
						items.softs.length - 1 === index ? `${skill}` : `${skill} | `,
					)}
				</p>
				<p className='text-base'>
					<span className='font-bold'>
						{language ? 'Tools: ' : 'Herramientas: '}
					</span>
					{items.tools.map((skill, index) =>
						items.tools.length - 1 === index ? `${skill}` : `${skill} | `,
					)}
				</p>
			</>
		) : (
			items.map((item) => (
				<SectionItem
					key={item.id}
					item={item}
					education={title === 'EDUCATION' || title === 'EDUCACIÓN'}
				/>
			))
		)}
	</section>
);

Section.displayName = 'Section';

export { Section };
