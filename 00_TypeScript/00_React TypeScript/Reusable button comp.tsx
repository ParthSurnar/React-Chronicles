type ButtonProps = {
    variant: "primary" | "secondary" | "danger";
    children: React.ReactNode;
    onClick: () => void;
  };
  
  const Button = ({ variant, children, onClick }: ButtonProps) => {
    const styles = {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
    };
  
    return (
      <button className={`px-4 py-2 rounded ${styles[variant]}`} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default function App() {
    return (
      <Button variant="primary" onClick={() => alert("Clicked!")}>
        Click Me
      </Button>
    );
  }
  