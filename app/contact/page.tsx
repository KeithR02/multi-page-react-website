import Image from "next/image";

export default function Contact() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-4xl">Contact Me</h1>

            <div className="flex items-center justify-center mt-10 pr-10 pl-10">
                <div className="mt-10 max-w-prose text-center">
                    <h1 className="text-2xl mb-10">
                        Contact me with any of the information listed bellow.
                    </h1>
                    <h1 className="text-xl">
                        Email: email@email.com
                    </h1>
                    <h1 className="text-xl">
                        Phone: 123-456-7890
                    </h1>
                    <h1 className="text-xl">
                        X: @randomUserName
                    </h1>
                    <h1 className="text-xl">
                        Instagram: @randomUserName
                    </h1>
                    <h1 className="text-xl">
                        Facebook: @randomUserName
                    </h1>
                </div>
                <Image src="/telephone.png" alt="An icon of a telephone" width={300} height={300}/>
            </div>
        </div>
    );
}