import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col items-center mt-10">
          <Image src="/welcome.png" alt="Welcome image" width={400} height={400} className="rounded-xl" />

          <div className="mt-10 max-w-prose text-center">
              <h1 className="text-xl">Hello! Welcome to my multi-page website where I demonstrate my understandings with React routing.
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                  sem placerat. In id cursus mi pretium tellus duis convallis.
              </h1>
          </div>
      </div>
  );
}
