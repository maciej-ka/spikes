import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Button as ButtonUI } from '@headlessui/react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren

const Button = ({ className, ...props }: ButtonProps) => (
  <ButtonUI className={clsx(styles.button, className)} {...props}>
    {props.children}
  </ButtonUI>
)

export default Button
