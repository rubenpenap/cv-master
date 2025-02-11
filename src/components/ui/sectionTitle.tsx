import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	title?: string;
	align?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
	className,
	title = 'Use title to set a text for title section...',
	align = 'center',
	...props
}) => (
	<h2
		className={cn(
			`text-${align} scroll-m-20 text-2xl font-bold tracking-tight mb-2 text-theme flex items-center gap-4 before:flex-1 before:h-px before:bg-theme after:flex-1 after:h-px after:bg-theme`,
			className,
		)}
		{...props}
	>
		{title}
	</h2>
);

SectionTitle.displayName = 'SectionTitle';

export { SectionTitle };
