import Link from "next/link";

export default function Navigation() {
    return (
        <header className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center ml-2 text-xl font-semibold text-gray-900">
                    HomePage
                </Link>
                
                <div className="flex items-center space-x-4">
                    <Link href="/about" className="flex items-center ml-2 text-xl font-semibold text-gray-900">
                        About Me
                    </Link>

                    <Link href="/contact" className="flex items-center ml-2 text-xl font-semibold text-gray-900">
                        Contact Me
                    </Link>
                </div>
            </div>
        </header>
    );
}