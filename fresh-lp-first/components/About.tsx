export default function About() {
  return (
    <section
      id="about"
      class="py-0 px-[4%] mx-auto mt-0 mb-[100px] max-w-[960px] text-center"
    >
      <h2 class="inline-block mb-[60px] text-[2rem] font-bold text-center border-b border-[#383e45] border-solid">
        About
      </h2>
      <div class="flex justify-center items-center">
        <div class="mr-[30px]">
          <img
            src="/about.jpg"
            class="rounded-[50%]"
            width={100}
            height={100}
            alt="テキストテキストテキスト"
          />
        </div>
        <div class="text-left">
          <h3 class="my-2.5 mx-0 text-base font-bold">KAKERU MIYAICHI</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </section>
  );
}
