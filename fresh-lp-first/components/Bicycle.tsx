const imgs = ["/bicycle1.jpg", "/bicycle2.jpg", "/bicycle3.jpg"];

export default function Bicycle() {
  return (
    <section
      id="bicycle"
      class="py-0 px-[4%] mx-auto mt-0 mb-[100px] max-w-[960px] text-center"
    >
      <h2 class="inline-block mb-[60px] text-[2rem] font-bold text-center border-b border-[#383e45] border-solid">
        Bicycle
      </h2>
      <ul class="flex justify-between">
        {imgs.map((item) => {
          return (
            <li class="w-[32%]" key={item}>
              <img
                src={item}
                alt="テキストテキストテキスト"
                width={640}
                height={424}
              />
              <h3 class="my-2.5 mx-0 text-base font-bold">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
