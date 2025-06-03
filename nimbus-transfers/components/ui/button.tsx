
export function Button({ children, className }: any) {
  return <button className={`rounded-xl px-4 py-2 ${className}`}>{children}</button>;
}
