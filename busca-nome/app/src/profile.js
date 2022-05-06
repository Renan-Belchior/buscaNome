import React, { useReducer } from "react";
import Repo from "./repos";
const Profile = ({user}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem',borderRadius:'30% 30% 5% 5%'  }}>
                        <img className="card-img-top" style={{ borderRadius: '30%'}}src={user.avatar_url}/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Username:
                                <span className="badge badge-success" style={{ color: 'gray', borderRadius: '30%' }}>{user.login}</span>
                            </li>
                            <li className="list-group-item">
                                Repósiroios:
                                <span className="badge badge-secondary bg-secondary">{user.public_repos}</span>
                            </li>
                            <li className="list-group-item">
                                Seguidores:
                                <span className="badge badge-success bg-secondary">{user.followers}</span>
                            </li>
                            <li className="list-group-item">
                                Seguindo:
                                <span className="badge badge-success bg-secondary">{user.following}</span>
                            </li>

                        </ul>
                        <div className="card-body">
                            <a href="" className="btn btn-success btn-block mt-1" style={{marginLeft: '30px'}}>Ver perfil e repositórios</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

