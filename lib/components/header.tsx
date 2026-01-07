import { JSX } from 'react';
import clsx from 'clsx';
import { calSans } from '../fonts';


export default function Header({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <h1 className={clsx(
      "text-6xl text-gray-900 mb-2 text-shadow-cyan",
      calSans.className
    )}>
      {children}
    </h1>
  )
}