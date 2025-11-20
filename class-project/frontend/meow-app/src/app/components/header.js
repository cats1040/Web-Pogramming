import Link from "next/link";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "1rem",
      }}
    >
      <Link href="/">Meow App</Link>
      <ul
        style={{
          display: "block",
          listStyle: "none",
          display: "flex",
          gap: "1rem",
        }}
      >
        <li>Home</li>
        <li>Products</li>
        <Link href="/login">Login</Link>
      </ul>
    </header>
  );
}

export default Header;
