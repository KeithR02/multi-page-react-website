import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-4xl">About Me</h1>

            <div className="flex items-center justify-center mt-10 pr-10 pl-10">
                <Image src="/aboutme.png" alt="An icon of a man pointing at himself" width={300} height={300}/>
        
                <div className="mt-10 max-w-prose text-center">
                    <h1 className="text-xl">Hello! I built this website. Hopefully that's all the information you need :). 
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque 
                        sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
                        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer 
                        nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra 
                        inceptos himenaeos.
                    </h1>
                </div>
            </div>
        </div>    
    );
}