import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Strata Management</h1>
      <p>Managing the building efficiently and transparently.</p>
      <nav>
        <ul>
          <li><Link href="/committee">Committee Members</Link></li>
          <li><Link href="/meetings">Meetings</Link></li>
          <li><Link href="/funds">Funds</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
