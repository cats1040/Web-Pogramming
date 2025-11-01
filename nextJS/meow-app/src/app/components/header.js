import Link from "next/link";

function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
