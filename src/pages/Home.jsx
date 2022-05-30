import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
    return (
        <div>
            <UserSearch />
            {/* <div className="text-6xl">Welcome</div> */}
            <UserResults />
        </div>
    )
}

export default Home