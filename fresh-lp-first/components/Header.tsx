export default function Header() {
  return (
    <header
      id="header"
      class="flex justify-between items-center py-0 px-[4%] my-auto mx-auto max-w-[960px] text-center"
    >
      <h1 class="py-2.5 px-0 w-[120px] leading-none">
        <a href="index.html">
          <img src="/logo_profile.svg" alt="Profile" width={120} height={40} />
        </a>
      </h1>
      <nav>
        <ul class="flex py-0 px-2.5">
          <li class="ml-[30px]">
            <a href="#about" class="text-[#24292e] hover:opacity-70">About</a>
          </li>
          <li class="ml-[30px]">
            <a href="#bicycle" class="text-[#24292e] hover:opacity-70">
              Bicycle
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
