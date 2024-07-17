import { ModeToggle } from "./mode-toggle";

function Header() {
    return (
        <header className="border-b border-b-2 border-muted">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-2xl">
                        Leave
                    </div>
                    <div className="lg:flex-grow justify-center flex items-center">
                        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-foreground hover:text-muted-foreground mr-4 text-xl">
                            Home
                        </a>
                        <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-foreground hover:text-muted-foreground mr-4 text-xl">
                            About Me
                        </a>
                        <a href="/resume" className="block mt-4 lg:inline-block lg:mt-0 text-foreground hover:text-muted-foreground text-xl">
                            Resume
                        </a>
                    </div>
                    <ModeToggle />
                </div>
            </nav> 
        </header>
    );
}

export { Header };