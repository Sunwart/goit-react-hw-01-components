function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li key="profile">
            <button type="button">Task 1: Profile</button>
          </li>
          <li key="stats">
            <button type="button">Task 2: Stats</button>
          </li>
          <li key="friends">
            <button type="button">Task 3: Friend list</button>
          </li>
          <li key="transactions">
            <button type="button">Task 4: Transaction history</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
