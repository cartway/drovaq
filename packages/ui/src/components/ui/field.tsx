import { cn } from "../../utils/utils";
import { Field as ArkField } from "@ark-ui/react/field";
import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

const labelVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-[14px] block leading-[20px] font-medium text-[#667485] mb-[8px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const errorTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-[14px] leading-[20px] font-medium text-red",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const helperTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-[14px] leading-[20px] font-medium text-[#667485]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface IFieldProps
  extends Partial<ArkField.RootProps>, VariantProps<typeof labelVariants> {
  children: ReactNode;
  label?: string;
  labelClassName?: string;
  errorText?: string;
  errorTextClassName?: string;
  helperText?: string;
  helperTextClassName?: string;
}

export const Field: FC<IFieldProps> = ({
  children,
  label,
  variant,
  labelClassName,
  errorText,
  errorTextClassName,
  helperText,
  helperTextClassName,
  ...props
}) => {
  return (
    <ArkField.Root {...props}>
      {label && (
        <ArkField.Label
          className={cn(labelVariants({ variant, className: labelClassName }))}
        >
          {label}
        </ArkField.Label>
      )}
      {children}
      {helperText && (
        <ArkField.HelperText
          className={cn(
            helperTextVariants({ variant, className: helperTextClassName })
          )}
        >
          {helperText}
        </ArkField.HelperText>
      )}
      {errorText && (
        <ArkField.ErrorText
          className={cn(
            errorTextVariants({ variant, className: errorTextClassName })
          )}
        >
          {errorText}
        </ArkField.ErrorText>
      )}
    </ArkField.Root>
  );
};
