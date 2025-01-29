import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { useId } from "react";

interface InputWithIconProps extends React.ComponentProps<"input"> {
	label?: string;
	transparent?: boolean;
	IconBefore?: React.ElementType;
	IconAfter?: React.ElementType;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
	(
		{ label, className, transparent, IconBefore, IconAfter, ...props },
		ref
	) => {
		const id = useId();

		return (
			<div className="space-y-2">
				{label && <Label htmlFor={id}>{label}</Label>}
				<div className="relative">
					<Input
						id={id}
						ref={ref}
						transparent={transparent}
						className={cn("peer pe-9 ps-9", className)}
						{...props}
					/>
					{IconBefore && (
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
							{<IconBefore className="h-4 w-4" />}
						</div>
					)}
					{IconAfter && (
						<div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
							{<IconAfter className="h-4 w-4" />}
						</div>
					)}
				</div>
			</div>
		);
	}
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
