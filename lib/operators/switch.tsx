import React from "react";

type CaseProps<T> = {
  value?: T;
  default?: boolean;
  children?: React.ReactNode;
};

export const Case = <T,>({ children }: CaseProps<T>) => <>{children}</>;

type SwitchProps<T> = {
  test: T;
  children: React.ReactNode;
};

export const Switch = <T,>({ test, children }: SwitchProps<T>) => {
  const cases = React.Children.toArray(children) as React.ReactElement<CaseProps<T>>[];

  const defaultResult =
    cases.find((child) => Boolean(child.props.default)) ?? null;

  const result =
    cases.find((child) => child.props.value === test) ?? null;

  return result ?? defaultResult;
};