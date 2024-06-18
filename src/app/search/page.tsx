import SearchComponent from "@/app/search/_components/search";

const Page = () => {
    return (
        <div className="m-20">
            <h1>My Page</h1>
            <div className="max-w-72">
                <SearchComponent clickable={false}/>
            </div>
            {/* Other components and content */}
        </div>
    );
};

export default Page;