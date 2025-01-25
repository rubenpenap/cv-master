import * as React from 'react';
import { Separator } from '@/components/ui/';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	title?: string;
	align?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
	className,
	title = 'Use title to set a text for title section...',
	align = 'left',
	...props
}) => (
	<>
		<h2
			className={cn(
				`text-${align} scroll-m-20 text-2xl font-bold tracking-tight`,
				className,
			)}
			{...props}
		>
			{title}
		</h2>
		<Separator className='my-1 bg-gray-600 h-[.15rem]' />
	</>
);

SectionTitle.displayName = 'SectionTitle';

export { SectionTitle };
