export default function Friend({ friend }) {
    const eachFriend = friend.friend
    // console.log(eachFriend)
    const { name, email } = eachFriend
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}