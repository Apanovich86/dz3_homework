import './Users.css'
import {useEffect, useState} from "react";
import {getPostOfUser, getUsers} from "../../services/user.fetch.service";
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);
    const choseUser = (u) => {
        setUser({...u});
            getPostOfUser(u.id).then(value => setPosts([...value]));
        }
    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value =>
                        <User
                            key={value.id}
                            item={value}
                            choseUser={choseUser}
                        />
                    )
                }
            </div>
            {user && (<div className={'chosen-one'}>{JSON.stringify(posts)}</div>)
            }
        </div>
    );
    }
