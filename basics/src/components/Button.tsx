import Button from 'react-bootstrap/Button';

interface BtnProps {
    children: string
    color?: string // '?' defines that thsi prop is optional
    // color?: "primary" | "secondary" | "dark" | "light"
    onClick: () => void
}

function TypesExample({ children, color = "dark", onClick }: BtnProps) {
  return (
    <>
      <Button variant={color} onClick={onClick}>{children}</Button>
    </>
  );
}

export default TypesExample;